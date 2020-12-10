import React from 'react';

class PurchaseTicketModal extends React.Component {

    constructor (props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let quantity = {};
        props.tickets.forEach(ticket => {
            quantity[ticket.id] = 0;
        });
        this.state = {
            ticketOrderProcessed: false,
            quantity: quantity
        };
    }

    closeModal() {
        document.body.classList.remove("stop-scrolling");
        this.props.toggleModal(false)
        this.setState({ticketOrderProcessed: false})
        this.props.tickets.forEach(ticket => {
            this.state.quantity[ticket.id] = 0;
        })
    }

    handleInput(field, ticketId) {
        return e => {
                const { quantity } = this.state;
                if (field === 'quantity') {
                    quantity[ticketId] = e.target.value
                    this.setState(quantity);
                }
                else {
                    this.setState({[field]: e.target.value});
                }
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const purchasedTicket = {
            purchased_ticket: {
                user_id: this.props.currentUser.id,
                ticket_id: null,
                quantity: null
            }
        };
        let eventTicketsSold = parseInt(this.props.event.ticketsSold);
        const lastIndex = this.props.tickets.length - 1;
        this.props.tickets.forEach((ticket, idx) => {
            const quantity = parseInt(this.state.quantity[ticket.id]);
            if (quantity !== 0) {
                purchasedTicket.purchased_ticket.ticket_id = ticket.id;
                purchasedTicket.purchased_ticket.quantity = quantity;
                const formData = new FormData();
                const ticketsSold = ticket.ticketsSold + quantity;
                eventTicketsSold += quantity;
                if (idx === lastIndex) {
                    formData.append('event[id]', ticket.eventId);
                    formData.append('event[tickets_sold]', eventTicketsSold);
                    if (eventTicketsSold === parseInt(this.props.event.capacity)) {
                        formData.append('event[status]', "Sold Out");
                        formData.append('event[is_sold_out]', true);
                    }
                }
                const payload = {user: this.props.currentUser, event: formData};
                this.props.purchaseTicket(purchasedTicket)
                    .then(() => this.props.updateTicket({ticket: {id: ticket.id, tickets_sold: ticketsSold}}))
                    .then(() => {
                        if (idx === lastIndex) {
                            this.props.updateEvent(payload);
                            this.setState({ticketOrderProcessed: true});
                        }
                    });
            }
        });
    }

    render() {
        if (!this.props.on) return null;
        const currencySymbol = {
            'USD': '$', 'EUR': '€', 'GBP': '£', 'INR': '₹', 'JPY': '¥', 'CNY': '¥'
        };
        let orderTotal = {
            'USD': 0, 'EUR': 0, 'GBP': 0, 'INR': 0, 'JPY': 0, 'CNY': 0
        };
        let ReceiptItems, TicketItems, OrderItems, Total, totalQuantity;
        if (this.state.ticketOrderProcessed) {
            ReceiptItems = this.props.tickets.map(ticket => {
                const quantity = parseInt(this.state.quantity[ticket.id]);
                orderTotal[ticket.currency] += quantity * ticket.price;
                return (
                    quantity === 0 ? 
                    <div key={ticket.id} className="order-summary-item-blank"></div> : 
                    <div key={ticket.id} className="order-receipt-item">
                        <div className="order-receipt-item-quantity"><p>{quantity} x {ticket.name}</p></div>
                        <div className="order-receipt-item-price"><p>{currencySymbol[ticket.currency]} {quantity * ticket.price}</p></div>
                    </div>
                );
            });
            let runningSum = 0;
            Total = Object.keys(orderTotal).map(currency => {
                const total = orderTotal[currency];
                runningSum += total;
                return (
                    total === 0 ? <div key={currency} className="order-receipt-total-blank"></div> :
                    <>
                    { total !== runningSum ? <div className="order-receipt-plus"><p>+</p></div> : <></>}
                    <div key={currency} className="order-receipt-total">
                        <div className="order-price"><p>{currencySymbol[currency]} {total}</p></div>
                    </div>
                    </>
                );
            });
        }
        else {
            TicketItems = this.props.tickets.map(ticket => {
                const tickets_sold = ticket.ticketsSold;
                const quantities = [0,1,2,3,4,5,6,7,8,9,10].slice(0, ticket.quantity - tickets_sold + 1);
                const QuantityDropdownItems = quantities.map(quantity => {
                    return <option key={quantity} value={quantity}>{quantity}</option>
                })
                return quantities.length > 1 ? 
                    <div className="modal-ticket-item" key={ticket.id}>
                        <div>
                            <p>{ticket.name}</p>
                            <p>{currencySymbol[ticket.currency]} {ticket.price}</p>
                        </div>
                        <div>
                            <select value={this.state.quantity[ticket.id]} onChange={this.handleInput(`quantity`,ticket.id)} id="quantity" name="quantity">
                                {QuantityDropdownItems}
                            </select>
                        </div>
                    </div> :
                    <div className="modal-ticket-item-blank"></div>
            })
            totalQuantity = 0;
            OrderItems = this.props.tickets.map(ticket => {
                let quantity = parseInt(this.state.quantity[ticket.id]);
                if (quantity > 0) {
                    totalQuantity += quantity;
                }
                else {
                    quantity = 0;
                }
                orderTotal[ticket.currency] += quantity * ticket.price;
                return (
                    quantity === 0 ? <div key={ticket.id} className="order-summary-item-blank"></div> : 
                    <div key={ticket.id} className="order-summary-item">
                        <div className="order-summary-item-quantity"><p>{quantity} x {ticket.name}</p></div>
                        <div className="order-summary-item-price"><p>{currencySymbol[ticket.currency]} {quantity * ticket.price}</p></div>
                    </div>
                );
            })
            let runningSum = 0;
            Total = Object.keys(orderTotal).map(currency => {
                const total = orderTotal[currency];
                runningSum += total;
                return (
                    total === 0 ? <div key={currency} className="order-total-blank"></div> :
                    <div key={currency} className="order-total">
                        { runningSum !== total ? <div className="order-plus"><p>+</p></div> : <></>}
                        <div className="order-price"><p>{currencySymbol[currency]} {total}</p></div>
                    </div>
                );
            });
        }
        return (
                <>
                    <div className="purchase-ticket-modal">
                        <div className="purchase-ticket-modal-close"><button onClick={this.closeModal}><i className="fas fa-times fa-lg"></i></button></div>
                        {this.state.ticketOrderProcessed ?
                        <div className="ticket-order-processed">
                            <div>
                                <h1>Thank you for your purchase!</h1>
                            </div>
                            <div>
                                <h1>Your order details:</h1>
                            </div>
                            <div className="order-receipt-items">{ReceiptItems}</div>
                            <div className="order-receipt-total-wrapper">
                                <div><p>Total</p></div>
                                {this.props.event.status === "Free" ? 
                                <div className="order-receipt-total-list">
                                    <div className="order-summary-item-blank">Free</div>
                                </div> :
                                <div className="order-receipt-total-list">{Total}</div>}
                            </div>
                        </div> :
                        <>
                            <div className="ticket-checkout">
                                <div><p>{this.props.event.name}</p></div>
                                <form className="modal-ticket-items-form" onSubmit={this.handleSubmit}>
                                    <div className="modal-ticket-items">{TicketItems}</div>
                                    <div className={`purchase-ticket-form-submit${totalQuantity === 0 ? "-disable" : ""}`}>
                                        <button type="submit" disabled={totalQuantity === 0 ? true : ''}>Purchase Tickets</button>
                                    </div>
                                </form>
                            </div>
                            <div className="ticket-order-summary">
                                <div className="ticket-order-summary-image">
                                    <img src={this.props.event.photoUrl} />
                                </div>
                                <div className="ticket-order-summary-info">
                                    <p>Order summary</p>
                                    <div className="order-summary-items">{OrderItems}</div>
                                    <div className="order-total-wrapper">
                                        <div><p>Total</p></div>
                                        { this.props.event.status === "Free" ? 
                                        <div className="order-total-list">
                                            <div className="order-total-blank">Free</div>
                                        </div> :
                                        <div className="order-total-list">{Total}</div>}
                                    </div>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                    <div className="purchase-ticket-modal-dim"></div>
                </>
        );
    }
}

export default PurchaseTicketModal;
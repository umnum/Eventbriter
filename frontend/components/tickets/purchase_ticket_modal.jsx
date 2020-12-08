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
                user_id: this.props.userId,
                ticket_id: null,
                quantity: null
            }
        };
        this.props.tickets.forEach(ticket => {
            const quantity = this.state.quantity[ticket.id];
            if (quantity !== 0) {
                purchasedTicket.purchased_ticket.ticket_id = ticket.id;
                purchasedTicket.purchased_ticket.quantity = quantity;
                this.props.purchaseTicket(purchasedTicket)
                    .then(() => this.setState({ticketOrderProcessed: true}));
            }
        });
    }

    render() {
        if (!this.props.on) return null;
        const quantities = [0,1,2,3,4,5,6,7,8,9,10];
        const QuantityDropdownItems = quantities.map(quantity => {
            return <option key={quantity} value={quantity}>{quantity}</option>
        })
        const currencySymbol = {
            'USD': '$', 'EUR': '€', 'GBP': '£', 'INR': '₹', 'JPY': '¥', 'CNY': '¥'
        };
        let orderTotal = {
            'USD': 0, 'EUR': 0, 'GBP': 0, 'INR': 0, 'JPY': 0, 'CNY': 0
        };
        let ReceiptItems, TicketItems, OrderItems, Total, runningSum;
        if (this.state.ticketOrderProcessed) {
            ReceiptItems = this.props.tickets.map(ticket => {
                const quantity = this.state.quantity[ticket.id];
                orderTotal[ticket.currency] += quantity * ticket.price;
                return (
                    quantity === 0 ? <div key={ticket.id} className="order-summary-item-blank"></div> : 
                    <div key={ticket.id} className="order-receipt-item">
                        <div className="order-receipt-item-quantity"><p>{quantity} x {ticket.name}</p></div>
                        <div className="order-receipt-item-price"><p>{currencySymbol[ticket.currency]} {quantity * ticket.price}</p></div>
                    </div>
                );
            });
            runningSum = 0;
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
                return <div className="modal-ticket-item" key={ticket.id}>
                    <div>
                        <p>{ticket.name}</p>
                        <p>{currencySymbol[ticket.currency]} {ticket.price}</p>
                    </div>
                    <div>
                        <select value={this.state.quantity[ticket.id]} onChange={this.handleInput(`quantity`,ticket.id)} id="quantity" name="quantity">
                            {QuantityDropdownItems}
                        </select>
                    </div>
                </div>
            })
            OrderItems = this.props.tickets.map(ticket => {
                const quantity = this.state.quantity[ticket.id];
                orderTotal[ticket.currency] += quantity * ticket.price;
                return (
                    quantity === 0 ? <div key={ticket.id} className="order-summary-item-blank"></div> : 
                    <div key={ticket.id} className="order-summary-item">
                        <div className="order-summary-item-quantity"><p>{quantity} x {ticket.name}</p></div>
                        <div className="order-summary-item-price"><p>{currencySymbol[ticket.currency]} {ticket.price}</p></div>
                    </div>
                );
            })
            runningSum = 0;
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
                                <div className="order-receipt-total-list">{Total}</div>
                            </div>
                        </div> :
                        <>
                            <div className="ticket-checkout">
                                <div><p>{this.props.event.name}</p></div>
                                <form className="modal-ticket-items-form" onSubmit={this.handleSubmit}>
                                    <div className="modal-ticket-items">{TicketItems}</div>
                                    <div className={`purchase-ticket-form-submit${runningSum === 0 ? "-disable" : ""}`}>
                                        <button type="submit" disabled={runningSum === 0 ? true : ''}>Purchase Tickets</button>
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
                                        <div className="order-total-list">{Total}</div>
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
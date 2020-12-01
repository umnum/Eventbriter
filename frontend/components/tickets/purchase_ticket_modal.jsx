import React from 'react';

class PurchaseTicketModal extends React.Component {

    constructor (props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let quantity = {};
        props.tickets.map(ticket => {
            quantity[ticket.id] = 0;
        });
        this.state = {
            quantity: quantity
        };
    }

    closeModal() {
        document.body.classList.remove("stop-scrolling");
        this.props.toggleModal(false)
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
                this.props.purchaseTicket(purchasedTicket);
            }
        });
    }

    render() {
        if (!this.props.on) return null;
        const quantities = [0,1,2,3,4,5,6,7,8,9,10];
        const QuantityDropdownItems = quantities.map(quantity => {
            return <option key={quantity} value={quantity}>{quantity}</option>
        })
        const TicketItems = this.props.tickets.map(ticket => {
            return <li className="modal-ticket-item" key={ticket.id}>
                <div>
                    <p>{ticket.name}</p>
                    <p>{ticket.price} {ticket.currency}</p>
                </div>
                <div>
                    <select value={this.state.quantity[ticket.id]} onChange={this.handleInput(`quantity`,ticket.id)} id="quantity" name="quantity">
                        {QuantityDropdownItems}
                    </select>
                </div>
            </li>
        })
        return (
                <>
                    <div className="purchase-ticket-modal">
                        <div><p>{this.props.event.name}</p></div>
                        <div><button onClick={this.closeModal}>Close</button></div>
                        <form onSubmit={this.handleSubmit}>
                            <ul className="modal-ticket-items">{TicketItems}</ul>
                            <div className="event-form-submit">
                                <button type="submit">Purchase Tickets</button>
                            </div>
                        </form>
                    </div>
                    <div className="purchase-ticket-modal-dim"></div>
                </>
        );
    }
}

export default PurchaseTicketModal;
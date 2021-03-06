import React from 'react';

class TicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.ticket;
        this.state.design = {
            name: false,
            price: false,
            currency: false,
            quantity: false
        };
        this.state.errors = {
            name: false,
            price: false,
            currency: false,
            quantity: false
        };
        this.state.loading = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.triggerLoadScreen = this.triggerLoadScreen.bind(this);
    }

    componentWillMount() {
        if (this.props.formType === 'Create Ticket') {
            this.props.fetchEvent(parseInt(this.props.match.params.eventId));
        }
    }

    componentDidMount() {
        document.body.classList.add("stop-scrolling");
        window.scrollTo(0,0);
    }

    componentWillUnmount() {
        document.body.classList.remove("stop-scrolling");
        this.props.clearTicketErrors();
    }

    handleInput(form) {
        return e => {
            this.setState({[form]: e.target.value});
        };
    }

    focus(form) {
        return e => {
            let name = false;
            let price = false;
            let currency = false;
            let quantity = false;
            switch (form) {
                case 'name':
                    name = true;
                    break;
                case 'price':
                    price = true;
                    break;
                case 'currency':
                    currency = true;
                    break;
                case 'quantity':
                    quantity = true;
                    break;
            }
            this.setState({design: {name, price, currency, quantity}});
        };
    }

    blur(form) {
        return e => {
            this.setState({design: false});
            if (e.target.value === '') {
                this.setState({errors: {[form]: true}})
            }
            else {
                this.setState({errors: {[form]: false}})
            }
        }
    }

    triggerLoadScreen() {
        this.setState({loading: true});
    }

    handleSubmit(e) {
        e.preventDefault();
        let payload = {
            ticket: {
                id: this.state.id,
                name: this.state.name,
                price: this.state.price,
                currency: this.state.currency,
                quantity: this.state.quantity,
                tickets_sold: this.state.ticketsSold,
                user_id: this.props.event.organizerId,
                event_id: this.props.event.id
            }
        };
        const prevTicketQuantity = this.props.ticket.quantity;
        this.props.submitForm(payload)
            .then(successResponse => {
                let event = {...successResponse.payload.event};
                if (parseInt(event.capacity) >= 0) {
                    if (this.props.formType === 'Update Ticket') {
                        event.capacity = parseInt(event.capacity) + parseInt(this.state.quantity) - prevTicketQuantity;
                    }
                    else {
                        event.capacity = parseInt(event.capacity) + parseInt(this.state.quantity);
                    }
                }
                else {
                    event.capacity = parseInt(this.state.quantity);
                }
                const formData = new FormData();
                formData.append('event[capacity]', event.capacity);
                formData.append('event[id]', event.id);
                formData.append('event[is_sold_out]', this.state.quantity > 0 ? false : event.isSoldOut);
                let status = event.status;
                if (this.state.quantity > 0) {
                    if (this.state.price > 0) {
                        status = "On Sale"
                    }
                    else if (status === "Announced" || status === "Sold Out"){
                        status = "Free"
                    }
                }
                formData.append('event[status]', status);
                if (this.props.formType === 'Create Ticket') {
                    formData.append('event[tickets_sold]', event.ticketsSold > 0 ? event.ticketsSold : 0);
                }
                let payload = {user: this.props.currentUser, event: formData};
                this.props.updateEvent(payload)
                    .then(successResponse =>{
                        this.props.history.push(`/users/${this.props.currentUser.id}/events/${event.id}/tickets`);
                    });
            }, errorsResponse => {
                let errors = {...this.state.errors};
                this.props.errors.forEach(error => {
                    if (error.includes("Name")) {
                        errors.name = true;
                        this.setState({errors})
                    }
                    if (error.includes("Quantity")) {
                        errors.quantity = true;
                        this.setState({errors})
                    }
                    if (error.includes("Price")) {
                        errors.price = true;
                        this.setState({errors})
                    }
                    if (error.includes("Currency")) {
                        errors.currency = true;
                        this.setState({errors})
                    }
                });
            });
    }

    render() {
        if (this.props.event === undefined) return null;
        if (this.props.currentUser.id !== this.props.event.organizerId) return null;
        let nameBorder = this.state.design.name ? "design-class" : "";
        let nameBorderError = this.state.errors.name ? "design-class" : "";
        let quantityBorder = this.state.design.quantity ? "design-class" : "";
        let quantityBorderError = this.state.errors.quantity ? "ticket-error-class" : "";
        let priceBorder = this.state.design.price ? "design-class" : "";
        let priceBorderError = this.state.errors.price ? "ticket-error-class" : "";
        let currencyBorder = this.state.design.currency ? "design-class" : "";
        let currencyBorderError = this.state.errors.currency ? "ticket-error-class" : "";
        return(
            <div className="ticket-form-wrapper">
                <form className="ticket-form" onSubmit={this.handleSubmit}>
                    <div className="ticket-form-title">
                        { this.props.formType === "Create Ticket" ? "Add Ticket" : "Update Ticket"}
                    </div>
                    <div className={this.state.design.name? 'ticket-field-wrapper-focused' : ( this.state.errors.name ? 'ticket-field-wrapper-error' : 'ticket-field-wrapper')}>
                        <div className={`name-ticket-field-wrapper ${nameBorder} ${nameBorderError}`}>
                            <label id="name-label">Name<p className="required">*</p></label>
                            <input onBlur={this.blur('name')} onFocus={this.focus('name')} onChange={this.handleInput('name')} type="text" value={this.state.name}/>
                        </div>
                    </div>
                    <div className={this.state.design.quantity? 'ticket-field-wrapper-focused' : ( this.state.errors.quantity ? 'ticket-field-wrapper-error' : 'ticket-field-wrapper')}>
                        <div className={`quantity-ticket-field-wrapper ${quantityBorder} ${quantityBorderError}`}>
                            <label id="quantity-label">Quantity<p className="required">*</p></label>
                            <input onBlur={this.blur('quantity')} onFocus={this.focus('quantity')} onChange={this.handleInput('quantity')} type="text" value={this.state.quantity}/>
                        </div>
                    </div>
                    <div className={this.state.design.price? 'ticket-field-wrapper-focused' : ( this.state.errors.price ? 'ticket-field-wrapper-error' : 'ticket-field-wrapper')}>
                        <div className={`price-ticket-field-wrapper ${priceBorder} ${priceBorderError}`}>
                            <label id="price-label">Price<p className="required">*</p></label>
                            <input onBlur={this.blur('price')} onFocus={this.focus('price')} onChange={this.handleInput('price')} type="text" value={this.state.price}/>
                        </div>
                    </div>
                    <div id="currency-dropdown">
                        <div className={this.state.design.currency? 'ticket-field-wrapper-dropdown-focused' : ( this.state.errors.currency ? 'ticket-field-wrapper-dropdown-error' : 'ticket-field-wrapper-dropdown')}>
                            <div className={`currency-ticket-field-wrapper ${currencyBorder} ${currencyBorderError}`}>
                                <select value={this.state.currency} onBlur={this.blur('currency')} onFocus={this.focus('currency')} onChange={this.handleInput('currency')} id="currency" name="currency">
                                    <option value="">Currency</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="CNY">CNY</option>
                                    <option value="INR">INR</option>
                                    <option value="JPY">JPY</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                    <div className="ticket-form-submit">
                        <div>
                            <button onClick={this.triggerLoadScreen} type="submit">{this.props.formType}</button>
                        </div>
                        <div className="ticket-form-errors">
                            {this.props.errors.length === 0 ? <p></p> : <p>Please fill out the required fields</p>}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default TicketForm;
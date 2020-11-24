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
    }

    render() {
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
                        Add Ticket
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
                    <div className={this.state.design.currency? 'ticket-field-wrapper-focused' : ( this.state.errors.currency ? 'ticket-field-wrapper-error' : 'ticket-field-wrapper')}>
                        <div className={`currency-ticket-field-wrapper ${currencyBorder} ${currencyBorderError}`}>
                            <label id="currency-label">Currency<p className="required">*</p></label>
                            <input onBlur={this.blur('currency')} onFocus={this.focus('currency')} onChange={this.handleInput('currency')} type="text" value={this.state.currency}/>
                        </div>
                    </div>
                    <div className="ticket-form-submit">
                        <button onClick={this.triggerLoadScreen} type="submit">{this.props.formType}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TicketForm;
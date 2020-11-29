import React from 'react';

class PurchaseTicketModal extends React.Component {

    constructor (props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        document.body.classList.remove("stop-scrolling");
        this.props.toggleModal(false)
    }

    render() {
        if (!this.props.on) return null;
        return (
                <>
                    <div className="purchase-ticket-modal">
                        <div><p>Purchase Ticket</p></div>
                        <div><button onClick={this.closeModal}>Close</button></div>
                    </div>
                    <div className="purchase-ticket-modal-dim"></div>
                </>
        );
    }
}

export default PurchaseTicketModal;
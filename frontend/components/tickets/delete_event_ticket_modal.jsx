import React from 'react';

class DeleteEventTicketModal extends React.Component {

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
                    <div className="ticket-event-delete-modal">
                        <div><p>Attendees have been refunded.</p></div>
                        <div><button onClick={this.closeModal}>Close</button></div>
                    </div>
                    <div className="ticket-event-delete-modal-dim"></div>
                </>
        );
    }
}

export default DeleteEventTicketModal;
import React from 'react';

class CreateTicketModal extends React.Component {

    constructor (props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        document.body.classList.remove("stop-scrolling");
        this.props.toggleModal(false)
        window.scrollTo(0,0);
        this.props.history.push(`/events/${this.props.eventId}/tickets/new`)
    }

    render() {
        if (!this.props.on) return null;
        return (
                <>
                    <div className="ticket-event-create-modal">
                        <div>
                            <p>You've created a new event!</p>
                        </div>
                        <div>
                            <p>Now, create a ticket for your event.</p>
                        </div>
                        <div><button onClick={this.closeModal}>Create Ticket</button></div>
                    </div>
                    <div className="ticket-event-delete-modal-dim"></div>
                </>
        );
    }
}

export default CreateTicketModal;
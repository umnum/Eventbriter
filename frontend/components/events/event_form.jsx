import React from 'react';
import CreateTicketModal from './create_ticket_modal';

class EventFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.event;
        this.state.design = {
            name: false,
            type: false,
            location: false,
            startDate: false,
            startTime: false,
            endDate: false,
            endTime: false,
            timezone: false,
            description: false,
            eventImage: false
        };
        this.state.errors = {
            name: false,
            type: false,
            location: false,
            startDate: false,
            startTime: false,
            endDate: false,
            endTime: false,
            timezone: false,
            description: false
        };
        this.state.loading = false;
        this.state.modalOn = false;
        this.state.eventId = null;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.triggerLoadScreen = this.triggerLoadScreen.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategories();
        window.scrollTo(0,0);
    }

    handleInput(form) {
        return e => {
            this.setState({[form]: e.target.value});
        };
    }

    toggleModal(toggle) {
        this.setState({modalOn: toggle})
    }

    focus(form) {
        return (e) => {
            let name = false;
            let type = false;
            let category = false;
            let location = false;
            let startDate = false;
            let startTime = false;
            let endDate = false;
            let endTime = false;
            let timezone = false;
            let description = false;
            if (form === 'name') {
                name = true;
            }
            else if (form === 'type') {
                type = true;
            }
            else if (form === 'category') {
                category = true;
            }
            else if (form === 'location') {
                location = true;
            }
            else if (form === 'startDate') {
                startDate = true;
            }
            else if (form === 'startTime') {
                startTime = true;
            }
            else if (form === 'endDate') {
                endDate = true;
            }
            else if (form === 'endTime') {
                endTime = true;
            }
            else if (form === 'timezone') {
                timezone = true;
            }
            else if (form === 'description') {
                description = true;
            }
            this.setState({design: {name, type, category, location, startDate, startTime, endDate, endTime, timezone, description}});
        };
    }

    blur(form) {
        return e => {
            this.setState({design: false})
            if (e.target.value === '') {
                this.setState({errors: {[form]: true}})
            }
            else {
                this.setState({errors: {[form]: false}})
            }
        }
    }

    triggerLoadScreen() {
        this.setState({loading: true})
    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        const startDateTime  = new Date(this.state.startDate + 'T' + this.state.startTime);
        const endDateTime = new Date(this.state.endDate + 'T' + this.state.endTime);
        formData.append('event[name]', this.state.name);
        formData.append('event[location]', this.state.location);
        formData.append('event[description]', this.state.description);
        formData.append('event[organizer_id]', this.props.currentUser.id);
        formData.append('event[category_id]', this.state.categoryId);
        formData.append('event[event_type]', this.state.eventType);
        formData.append('event[start_date]', startDateTime);
        formData.append('event[end_date]', endDateTime);
        formData.append('event[timezone]', this.state.timezone);
        formData.append('event[status]', this.state.status);
        if (this.state.eventImage) {
            formData.append('event[event_image]', this.state.eventImage);
        }
        if (this.props.formType === 'Update Event') {
            formData.append('event[id]', this.props.event.id);
        }
        let payload = {user: this.props.currentUser, event: formData};
        this.props.submitForm(payload).then(response => {
            const eventId = response.payload.event.id;
            this.setState({eventId});
            this.props.clearEventErrors();
            if (this.props.formType === 'Update Event') {
                this.props.history.push(`/events/${eventId}`);
            }
            else {
                // TODO: trigger ticket creation modal
                this.setState({modalOn: true})
                window.scrollTo(0,0);
                document.body.classList.add("stop-scrolling");
                this.setState({loading: false});
            }
        }, errorResponse => {
            let errors = {...this.state.errors};
            this.props.errors.forEach(error => {
                if (error.includes("Name")) {
                    errors.name = true;
                    this.setState({errors})
                }
                if (error.includes("Location")) {
                    errors.location = true;
                    this.setState({errors})
                }
                if (error.includes("Event type")) {
                    errors.type = true;
                    this.setState({errors})
                }
                if (error.includes("Description")) {
                    errors.description = true;
                    this.setState({errors})
                }
                if (error.includes("Start date")) {
                    errors.startDate = true;
                    errors.startTime = true;
                    this.setState({errors})
                }
                if (error.includes("End date")) {
                    errors.endDate = true;
                    errors.endTime = true;
                    this.setState({errors})
                }
                if (error.includes("Timezone")) {
                    errors.timezone = true;
                    this.setState({errors})
                }
                if (error.includes("Category")) {
                    errors.category = true;
                    this.setState({errors})
                }
                if (error.includes("Event image")) {
                    errors.eventImage = true;
                    this.setState({errors})
                }
            });
            this.setState({loading: false});
        });
    }

    handleFile(e) {
        let errors = {...this.state.errors};
        errors.eventImage = false;
        this.setState({errors});
        this.setState({eventImage: e.currentTarget.files[0]});
    }

    render() {
        let startDate = new Date(this.state.startDate);
        let endDate = new Date(this.state.endDate);
        let year = startDate.getFullYear().toString();
        let month = (startDate.getMonth() + 1).toString();
        month = (month.length === 1 ? '0' : '') + month;
        let day = startDate.toString(' ').split(' ')[2];
        let startTime = startDate.toTimeString().split(' ')[0].slice(0, 5);
        startDate = `${year}-${month}-${day}`;

        year = endDate.getFullYear().toString();
        month = (endDate.getMonth() + 1).toString();
        month = (month.length === 1 ? '0' : '') + month;
        day = endDate.toString(' ').split(' ')[2];
        let endTime = endDate.toTimeString().split(' ')[0].slice(0, 5);
        endDate = `${year}-${month}-${day}`;

        let categoryOptions = this.props.categories.map(category => {
            return <option key={category.id} value={category.id}>{category.name}</option>;
        }); 
        const errors = this.props.errors.map((error, idx) => {
            return <p key={idx}>{error}</p>;
        });
        let nameBorder = this.state.design.name ? "new-class" : "";
        let nameBorderError = this.state.errors.name ? "error-class" : "";
        let typeBorder = this.state.design.type ? "new-class" : "";
        let typeBorderError = this.state.errors.type ? "error-class-dropdown" : "";
        let categoryBorder = this.state.design.category ? "new-class" : "";
        let categoryBorderError = this.state.errors.category ? "error-class-dropdown" : "";
        let locationBorder = this.state.design.location? "new-class" : "";
        let locationBorderError = this.state.errors.location? "error-class" : "";
        let startDateBorder = this.state.design.startDate? "new-class" : "";
        let startDateBorderError = this.state.errors.startDate? "error-class" : "";
        let startTimeBorder = this.state.design.startTime? "new-class" : "";
        let startTimeBorderError = this.state.errors.startTime? "error-class" : "";
        let endDateBorder = this.state.design.endDate? "new-class" : "";
        let endDateBorderError = this.state.errors.endDate? "error-class" : "";
        let endTimeBorder = this.state.design.endTime? "new-class" : "";
        let endTimeBorderError = this.state.errors.endTime? "error-class" : "";
        let timezoneBorder = this.state.design.timezone? "new-class" : "";
        let timezoneBorderError = this.state.errors.timezone? "error-class" : "";
        let descriptionBorder = this.state.design.description? "new-class" : "";
        let descriptionBorderError = this.state.errors.description? "error-class" : "";
        return (
            <>
                <CreateTicketModal on={this.state.modalOn} toggleModal={this.toggleModal} eventId={this.state.eventId} history={this.props.history} />
                <form className="event-form" onSubmit={this.handleSubmit}>
                    <div className="event-basic-info">
                        <div className="basic-info-header">
                            <h1>
                                Basic Info
                            </h1>
                            <div>
                                <p>
                                    <span>
                                        Name your event and tell event-goers why they should come. 
                                        Add details that highlight what makes it unique.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={this.state.design.name? 'field-wrapper-focused' : ( this.state.errors.name ? 'field-wrapper-error' : 'field-wrapper')}>
                            <div className={`name-field-wrapper ${nameBorder} ${nameBorderError}`}>
                                <label id="name-label">Event Title</label>
                                <input onBlur={this.blur('name')} onFocus={this.focus('name')} onChange={this.handleInput('name')} type="text" value={this.state.name}/>
                            </div>
                        </div>
                        <div className={`event-errors-${this.state.errors.name ? 'shown' : 'hidden'}`}>Name field cannot be empty</div>
                        <div id="event-type-category-dropdown">
                            <div className={this.state.design.type? 'field-wrapper-dropdown-focused' : ( this.state.errors.type ? 'field-wrapper-dropdown-error' : 'field-wrapper-dropdown')}>
                                <div className={`category-field-wrapper ${typeBorder} ${typeBorderError}`}>
                                    <select value={this.state.eventType} onBlur={this.blur('type')} onFocus={this.focus('type')} onChange={this.handleInput('eventType')} id="event-type" name="eventType">
                                        <option value="">Type</option>
                                        <option value="Appearance or Signing">Appearance or Signing</option>
                                        <option value="Attraction">Attraction</option>
                                        <option value="Camp, Trip, or Retreat">Camp, Trip, or Retreat</option>
                                        <option value="Class, Training, or Workshop">Class, Training, or Workshop</option>
                                        <option value="Concert or Performance">Concert or Performance</option>
                                        <option value="Conference">Conference</option>
                                        <option value="Convention">Convention</option>
                                        <option value="Dinner or Gala">Dinner or Gala</option>
                                        <option value="Festival or Fair">Festival or Fair</option>
                                        <option value="Game or Competition">Game or Competition</option>
                                        <option value="Meeting or Networking Event">Meeting or Networking Event</option>
                                        <option value="Other">Other</option>
                                        <option value="Party or Social Gathering">Party or Social Gathering</option>
                                        <option value="Race or Endurance Event">Race or Endurance Event</option>
                                        <option value="Rally">Rally</option>
                                        <option value="Screening">Screening</option>
                                        <option value="Seminar or Talk">Seminar or Talk</option>
                                        <option value="Tour">Tour</option>
                                        <option value="Tournament">Tournament</option>
                                        <option value="Tradeshow, Consumer Show, or Expo">Tradeshow, Consumer Show, or Expo</option>
                                    </select>
                                </div>
                            </div> 
                            <div className={this.state.design.category? 'field-wrapper-dropdown-focused' : ( this.state.errors.category? 'field-wrapper-dropdown-error' : 'field-wrapper-dropdown')}>
                                <div className={`category-field-wrapper ${categoryBorder} ${categoryBorderError}`}>
                                    <select value={this.state.categoryId} onBlur={this.blur('category')} onFocus={this.focus('category')} onChange={this.handleInput('categoryId')} id="category-type" name="categoryId">
                                        <option value="">Category</option>
                                        {categoryOptions}
                                    </select>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <hr className="event-form-divider" />
                    <div className="event-location">
                        <div className="event-location-header">
                            <h1>
                                Location
                            </h1>
                            <div>
                                <p>
                                    <span>
                                        Help people in the area discover your event and let attendees know where to show up.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={this.state.design.location? 'field-wrapper-focused' : ( this.state.errors.location ? 'field-wrapper-error' : 'field-wrapper')}>
                            <div className={`location-field-wrapper ${locationBorder} ${locationBorderError}`}>
                                <label id="location-label">Location</label>
                                <input onBlur={this.blur('location')} onFocus={this.focus('location')} onChange={this.handleInput('location')} type="text" value={this.state.location}/>
                            </div>
                        </div> 
                        <div className={`event-errors-${this.state.errors.location ? 'shown' : 'hidden'}`}>Location field cannot be empty</div>
                    </div> 
                    <hr className="event-form-divider" />
                    <div className="event-date-and-time">
                        <div className="event-date-and-time-header">
                            <h1>
                                Date and time
                            </h1>
                            <div>
                                <p>
                                    <span>
                                        Tell event-goers when your event starts and ends so they can make plans to attend.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="event-date-timezone-wrapper">
                            <div className="event-date-and-time-selector">
                                <div className="start-date-time-field-wrapper">
                                    <div id="start-date" className="datetime-item">
                                        <div className={this.state.design.startDate? 'field-wrapper-focused' : ( this.state.errors.startDate? 'field-wrapper-error' : 'field-wrapper')}>
                                            <div className={`start-date-field-wrapper ${startDateBorder} ${startDateBorderError}`}>
                                                <label id="start-date-label">Start Date</label>
                                                <input onBlur={this.blur('startDate')} onFocus={this.focus('startDate')} onChange={this.handleInput('startDate')} type="date" />
                                            </div>
                                        </div> 
                                    </div>
                                    <div id="start-time" className="datetime-item">
                                        <div className={this.state.design.startTime? 'field-wrapper-focused' : ( this.state.errors.startTime? 'field-wrapper-error' : 'field-wrapper')}>
                                            <div className={`start-time-field-wrapper ${startTimeBorder} ${startTimeBorderError}`}>
                                                <label id="start-time-label">Start Time</label>
                                                <input onBlur={this.blur('startTime')} onFocus={this.focus('startTime')} onChange={this.handleInput('startTime')} type="time" name="startTime" />
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="end-date-time-field-wrapper">
                                    <div id="end-date" className="datetime-item">
                                        <div className={this.state.design.endDate? 'field-wrapper-focused' : ( this.state.errors.endDate? 'field-wrapper-error' : 'field-wrapper')}>
                                            <div className={`end-date-field-wrapper ${endDateBorder} ${endDateBorderError}`}>
                                                <label id="end-date-label">End Date</label>
                                                <input onBlur={this.blur('endDate')} onFocus={this.focus('endDate')} onChange={this.handleInput('endDate')} type="date" name="endDate" />
                                            </div>
                                        </div> 
                                    </div>
                                    <div id="end-time" className="datetime-item">
                                        <div className={this.state.design.endTime? 'field-wrapper-focused' : ( this.state.errors.endTime? 'field-wrapper-error' : 'field-wrapper')}>
                                            <div className={`end-time-field-wrapper ${endTimeBorder} ${endTimeBorderError}`}>
                                                <label id="start-time-label">End Time</label>
                                                <input onBlur={this.blur('endTime')} onFocus={this.focus('endTime')} onChange={this.handleInput('endTime')} type="time" name="endTime" />
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div id="timezone-dropdown">
                                <div className={this.state.design.timezone? 'field-wrapper-dropdown-focused' : ( this.state.errors.timezone? 'field-wrapper-dropdown-error' : 'field-wrapper-dropdown')}>
                                    <div className={`timezone-field-wrapper ${timezoneBorder} ${timezoneBorderError}`}>
                                        <select value={this.state.timezone} onBlur={this.blur('timezone')} onFocus={this.focus('timezone')} onChange={this.handleInput('timezone')} id="timezone-type" name="timezone">
                                            <option value="">Timezone</option>
                                            <option value="AST">Atlantic Standard Time (AST)</option>
                                            <option value="EST">Eastern Standard Time (EST)</option>
                                            <option value="EDT">Eastern Daylight Time (EDT)</option>
                                            <option value="CST">Central Standard Time (CST)</option>
                                            <option value="CDT">Central Daylight Time (CDT)</option>
                                            <option value="MST">Mountain Standard Time (MST)</option>
                                            <option value="MDT">Mountain Daylight Time (MDT)</option>
                                            <option value="PST">Pacific Standard Time (PST)</option>
                                            <option value="PDT">Pacific Daylight Time (PDT)</option>
                                            <option value="AKST">Alaska Standard Time (AKST)</option>
                                            <option value="AKDT">Alaska Daylight Time (AKDT)</option>
                                            <option value="HST">Hawaii Standard Time (HST)</option>
                                            <option value="HAST">Hawaii-Aleutian Standard Time (HAST)</option>
                                            <option value="HADT">Hawaii-Aleutian Daylight Time (HADT)</option>
                                            <option value="SST">Samoa Standard Time (SST)</option>
                                            <option value="SDT">Samoa Daylight Time (SDT)</option>
                                            <option value="CHST">Chamorro Standard Time (CHST)</option>
                                        </select>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <hr className="event-form-divider" />
                    <div className="event-description-wrapper">
                        <div className="event-description-header">
                            <h1>
                                Description
                            </h1>
                            <div>
                                <p>
                                    <span>
                                        Add more details to your event like your schedule, sponsors, or featured guests.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={this.state.errors.description ? 'description-errors' : ''}>
                                <textarea rows="10" onBlur={this.blur('description')} onFocus={this.focus('description')} onChange={this.handleInput('description')} value={this.state.description} />
                        </div>
                    </div> 
                    <div className={`event-errors-${this.state.errors.description ? 'shown' : 'hidden'}`}>You must add a description for your event.</div>
                    <div className="event-image">
                        <h1>
                            Main Event Image
                        </h1>
                        <div>
                            <p>
                                <span>
                                    This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).
                                </span>
                            </p>
                        </div>
                        <div className="image-selector">
                            <input className={this.state.errors.eventImage ? `image-selector-error` : ``} onChange={this.handleFile} type="file" />
                        </div>
                    </div>
                    <div className="event-form-submit">
                        <button onClick={this.triggerLoadScreen} type="submit">{this.props.formType}</button>
                    </div>
                    <div className="event-errors-list">
                        {errors}
                    </div>
                </form>
            <div className={this.state.loading ? "" : "loader-disabled"}><div className={this.state.loading ? "loader" : "loader-disabled"}></div></div>
            <div className={this.state.loading ? "dim" : "dim-disabled"}></div>
            </>
        );
    }
}

export default EventFrom;
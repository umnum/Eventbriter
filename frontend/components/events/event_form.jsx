import React from 'react';

class EventFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.event;
        this.state.design = {
            name: false,
            type: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    handleInput(form) {
        return e => {
            this.setState({[form]: e.target.value});
        };
    }

    focus(form) {
        //document.getElementsByClassName('email-field-wrapper')[0].classList.add("new-class");
        return (e) => {
            //this.setState({[form]: e.target.value});
            let name = false;
            let type = false;
            let category = false;
            if (form === 'name') {
                name = true;
            }
            else if (form === 'type') {
                type = true;
            }
            else if (form === 'category') {
                category = true;
            }
            this.setState({design: {name, type, category}});
        };
    }

    blur() {
        this.setState({design: false})
    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        const startDateTime  = new Date(this.state.startDate + 'T' + this.state.startTime);
        const endDateTime = new Date(this.state.endDate + 'T' + this.state.endTime);
        formData.append('event[event_image]', this.state.eventImage);
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
        formData.append('event[event_image]', this.state.eventImage);
        if (this.props.formType === 'Update Event') {
            formData.append('event[id]', this.props.event.id);
        }
        this.props.submitForm(formData);
    }

    handleFile(e) {
        this.setState({eventImage: e.currentTarget.files[0]});
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category.id} value={category.id}>{category.name}</option>;
        });
        let nameBorder = this.state.design.name ? "new-class" : "";
        let typeBorder = this.state.design.type ? "new-class" : "";
        let categoryBorder = this.state.design.category ? "new-class" : "";
        return (
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
                    <div className={this.state.design.name? 'field-wrapper-focused' : 'field-wrapper'}>
                        <div className={`name-field-wrapper ${nameBorder}`}>
                            <label id="name-label">Event Title</label>
                            <input onBlur={this.blur.bind(this)} onFocus={this.focus('name')} onChange={this.handleInput('name')} type="text" value={this.state.name}/>
                        </div>
                    </div>
                    <div className="event-type-category-dropdown">
                        <div className={this.state.design.type? 'field-wrapper-dropdown-focused' : 'field-wrapper-dropdown'}>
                            <div className={`name-field-wrapper ${typeBorder}`}>
                                <select onBlur={this.blur.bind(this)} onFocus={this.focus('type')} onChange={this.handleInput('eventType')} id="event-type" name="eventType">
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
                        <div className={this.state.design.category? 'field-wrapper-dropdown-focused' : 'field-wrapper-dropdown'}>
                            <div className={`category-field-wrapper ${categoryBorder}`}>
                                <select onBlur={this.blur.bind(this)} onFocus={this.focus('category')} onChange={this.handleInput('categoryId')} id="category-type" name="categoryId">
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
                    <div>
                        <label>Location</label>
                        <input onChange={this.handleInput('location')} type="text" value={this.state.location}/>
                    </div>
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
                                    Help people in the area discover your event and let attendees know where to show up.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <label>Start Date</label>
                            <input onChange={this.handleInput('startDate')} type="date" id="start-date" name="startDate" />
                    </div> 
                    <div>
                        <label>Start Time</label>
                            <input onChange={this.handleInput('startTime')} type="time" id="start-time" name="startTime" />
                    </div> 
                    <div>
                        <label>End Date</label>
                            <input onChange={this.handleInput('endDate')} type="date" id="end-date" name="endDate" />
                    </div> 
                    <div>
                        <label>End Time</label>
                            <input onChange={this.handleInput('endTime')} type="time" id="end-time" name="endTime" />
                    </div> 
                    <div>
                        <label>Timezone</label>
                            <select onChange={this.handleInput('timezone')} id="timezone" name="timezone">
                                <option value="AST">Atlantic Standard Time (AST)</option>
                                <option value="EST">Eastern Standard Time (EST)</option>
                                <option value="EDT">Eastern Daylight Time (EDT)</option>
                                <option value="CST">Central Standard Time (CST)</option>
                                <option value="CDT">Central Daylight Time (CDT)</option>
                                <option value="MST">Mountain Standard Time (MST)</option>
                                <option value="MDT">Mountain Daylight Time (MDT)</option>
                                <option value="PST">Pacific Standard Time (PST)</option>
                                <option defaultValue value="PDT">Pacific Daylight Time (PDT)</option>
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
                <hr className="event-form-divider" />
                <div>
                    <label>Description</label>
                    <input onChange={this.handleInput('description')} type="text" value={this.state.description}/>
                </div> 
               <div>
                   <label>Image</label>
                   <input onChange={this.handleFile} type="file"/>
               </div>
                <button type="submit">{this.props.formType}</button>
            </form>
        );
    }
}

export default EventFrom;
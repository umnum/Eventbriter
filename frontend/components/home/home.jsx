import React from 'react';
import EventIndexContainer from '../../components/events/event_index_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return(
            <div className="home">
                <div className="events">
                    <div className="events-title">Popular events</div>
                    {/*<nav className="event-index-nav">
                        <ul>
                            <li><Link to=""><span>All</span></Link></li>
                            <li><Link to=""><span>For you</span></Link></li>
                            <li><Link to=""><span>Today</span></Link></li>
                            <li><Link to=""><span>This Weekend</span></Link></li>
                            <li><Link to=""><span>Halloween</span></Link></li>
                            <li><Link to=""><span>Breast Cancer Awareness</span></Link></li>
                            <li><Link to=""><span>Free</span></Link></li>
                            <li><Link to=""><span>Music</span></Link></li>
                            <li><Link to=""><span>Food & Drink</span></Link></li>
                            <li><Link to=""><span>Charity & Causes</span></Link></li>
                        </ul>
                    </nav>*/}
                    <EventIndexContainer />
                </div>
            </div>
        );
    };
};

export default Home;
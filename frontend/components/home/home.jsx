import React from 'react';
import EventIndexContainer from '../../components/events/event_index_container';

class Home extends React.Component {

    render() {
        return(
            <div className="home">
                <EventIndexContainer />
            </div>
        );
    };
};

export default Home;
const { render } = require("react-dom")

import React from 'react';

const UserEventIndexItem = ({ event }) => {
    return (
        <div>
            <div>
                <div className="contents-description">
                    <div className="event-content-description">
                        <div className="event-content-description-date"></div>
                        <div className="event-content-description-image"></div>
                        <div className="event-content-description-info"></div>
                    </div>
                    <div className="sold-content-description"></div>
                    <div className="gross-content-description"></div>
                    <div className="status-content-description"></div>
                    <div className="user-event-dropdown"></div>
                </div>
            </div>
        </div>
    );
};

export default UserEventIndexItem;
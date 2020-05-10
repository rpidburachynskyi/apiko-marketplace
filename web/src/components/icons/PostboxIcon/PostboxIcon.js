import React from 'react';

import "./PostboxIcon.scss";
import { connect } from 'react-redux';

const PostboxIcon = ({ unreadableChatsIds, dispatch, ...props }) => {
    return (
        <div className="postbox-icon"  {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 0H1.99C0.88 0 0.00999999 0.89 0.00999999 2L0 16C0 17.1 0.88 18 1.99 18H16C17.1 18 18 17.1 18 16V2C18 0.89 17.1 0 16 0ZM16 12H12.87C12.4 12 12.02 12.34 11.89 12.8C11.54 14.07 10.37 15 9 15C7.63 15 6.46 14.07 6.11 12.8C5.98 12.34 5.6 12 5.13 12H2V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V12Z" fill="white" />
            </svg>
            {unreadableChatsIds.length !== 0 &&
                <div className="postbox-icon-circle">
                </div>
            }
        </div>
    )
};

export default connect(
    (({ chats: { unreadableChatsIds } }) => ({ unreadableChatsIds }))
)(PostboxIcon);
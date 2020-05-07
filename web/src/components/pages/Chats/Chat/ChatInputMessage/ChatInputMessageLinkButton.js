import React from 'react';

const ChatInputMessageLinkButton = ({ ...props }) => {
    return (
        <button {...props}>
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.506 4.91071V16.2054C9.506 18.3759 7.71487 20.1339 5.50347 20.1339C3.29208 20.1339 1.50095 18.3759 1.50095 16.2054V3.92857C1.50095 2.57321 2.62165 1.47321 4.00253 1.47321C5.3834 1.47321 6.50411 2.57321 6.50411 3.92857V14.2411C6.50411 14.7812 6.05382 15.2232 5.50347 15.2232C4.95313 15.2232 4.50284 14.7812 4.50284 14.2411V4.91071H3.0019V14.2411C3.0019 15.5964 4.1226 16.6964 5.50347 16.6964C6.88435 16.6964 8.00505 15.5964 8.00505 14.2411V3.92857C8.00505 1.75804 6.21392 0 4.00253 0C1.79113 0 0 1.75804 0 3.92857V16.2054C0 19.1911 2.46155 21.6071 5.50347 21.6071C8.54539 21.6071 11.0069 19.1911 11.0069 16.2054V4.91071H9.506Z" fill="#97A3B4" />
            </svg>

        </button>
    )
};

export default ChatInputMessageLinkButton;
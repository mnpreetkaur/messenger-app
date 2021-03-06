import React from 'react';
import PropTypes from 'prop-types'

import Message from '../Message';
import './message-list.scss'

/**
 * This is the message list display of the application. It shows a list of all the
 * messages which have been sent and received at anytime from a person during the current chat session.
 * @param {*} props 
 * messageList The complete message list cached in store
 * currentPerson required to extract messages for selected person
 */
const MessageList = (props) => {
    const { messageList, currentPerson } = props
    // Here we should loop through each message and
    // pass it to the Message component

    const currentMessagelist = messageList.find((messageObj)=>{ return messageObj.from === currentPerson })
    const { messages } = currentMessagelist

    return <div className="message-list">
        {
            messages.map((message) => {
                const { message: msg, time } = message
                return <Message key={`${msg}${time}`} {...message} />
            })
        }
    </div>
}

MessageList.defaultProps = {
    messageList: []
};

MessageList.propTypes = {
    messageList: PropTypes.array,
    currentPerson: PropTypes.string.isRequired
}

export default MessageList;
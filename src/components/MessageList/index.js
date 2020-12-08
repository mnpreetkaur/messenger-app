import React from 'react';

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
                return <Message {...message} />
            })
        }
    </div>
}

MessageList.defaultProps = {
};

export default MessageList;
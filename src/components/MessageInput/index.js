import React from 'react';

import './message-input.scss'

/**
 * A message input component where a message could be typed and sent to the the person.
 * It would appear in the current chat session once sent.
 */
class MessageInput extends React.Component {
    constructor (props) {
        super(props)
        this.input = React.createRef()
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler (e) {
        e.preventDefault(); // Stop form from refreshing the page on submit
        const { sendMessage } = this.props
        const msg = this.input.value

        if (msg) {
            this.input.value = ''
            sendMessage(msg)
        }
    }

    render() {
        return <div className="message-input">
            <form className="chat-input" onSubmit={this.submitHandler}>
                <input className="chat-text"
                type="text"
                ref={input => { this.input = input }}
                placeholder="Type the message here"
                required />
            </form>
        </div>
    }
}

MessageInput.defaultProps = {
};

export default MessageInput;
import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { displayDateTime } from '../../utils/date-utils'

/**
 * This component creates a message. The message would contain the text and the time when sent.
 * The sent messages are aligned right and the received messages are aligned left.
 * 
 * @param {*} props
 * Message Format example
 * { message: 'Hey! How are you?', received: true, time: '2020-08-12T20:17:46.384Z' } 
 */
const Message = (props) => {
    const { message, received, time } = props
    return (
        <div className={classNames('message', !received && 'align-right')}>
            {message}
            <div className="msg-time">{displayDateTime(time)}</div>
        </div>
    )
}

Message.defaultProps = {
    time: ''
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    received: PropTypes.bool.isRequired,
    time: PropTypes.string
}

export default Message;
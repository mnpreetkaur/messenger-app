import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
// import draftingHook from './draftingHook'

import './message-input.scss'

/**
 * A message input component where a message could be typed and sent to the the person.
 * It would appear in the current chat session once sent.
 */
const MessageInput = (props) => {
    const { sendMessage, currentPerson } = props

    const [draft, changeDraft] = useState([])
  
    const getDraft = (sentTo) => {
      const messageObj =  draft.find(({ to }) => to === sentTo )
      const { msg = "" } = messageObj || {}
      return msg
    }
  
    const setDraft = (sentTo, message) => {
      const index = draft.findIndex(({ to }) => to === sentTo )
      if (index > 0) {
        draft[index].msg = message
      } else {
        draft.push({
          to: sentTo,
          msg: message
        })
      }
      changeDraft(draft)
    }

    const [ to, changeTo ] = useState(currentPerson)
    const [ inputValue, changeInputVal ] = useState('')

    useEffect(() => {
        if (currentPerson !== to) {
            setDraft(to, inputValue)
            changeTo(currentPerson)
            changeInputVal(getDraft(currentPerson))
        }
    }, [currentPerson])


    const submitHandler = (e) => {
        e.preventDefault();

        if (inputValue) {
            changeInputVal('')
            sendMessage(inputValue)
        }
    }

    return <div className="message-input">
        <form className="chat-input" onSubmit={submitHandler}>
            <input className="chat-text"
            type="text"
            onChange={(e) => changeInputVal(e.target.value)}
            value={inputValue}
            placeholder="Type the message here"
            required />
        </form>
    </div>
}

MessageInput.defaultProps = {
    sendMessage: () => {}
};

MessageInput.propTypes = {
    sendMessage: PropTypes.func,
    currentPerson: PropTypes.string.isRequired
}

export default MessageInput;
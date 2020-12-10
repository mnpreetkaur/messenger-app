import React from 'react';

import MessageList from '../MessageList';
import SenderList from '../SenderList';
import MessageInput from '../MessageInput';
import './messenger-app.scss'

/**
 * The main container component for chat application.
 * It wraps the message list, sender list and the message input component.
 * 
 * It stores the messages as a state which could be cached in a redux store for enhancement.
 * 
 * STATE STRUCTURE
 * currentPerson - The current active chat session
 * peopleList - List of senders with their unique identification
 * messageList - The list of messages exchanged with list of people
 */
class MessengerApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentPerson: '1',
            peopleList: [
                {
                id: '1',
                name: 'Person 1'
                },
                {
                id: '2',
                name: 'Person 2'
                },
                {
                id: '3',
                name: 'Person 3'
                },
                {
                id: '4',
                name: 'Person 4'
                },
            ],
            messageList: [
                { from: '1', messages: [
                    { message: 'Hey! How are you Person1?', received: true, time: '2020-08-12T20:17:46.384Z' },
                    { message: 'I am good', received: false, time: '2020-08-12T20:17:47.384Z' },
                    { message: 'What is the plan?', received: false, time: '2020-08-12T20:17:48.384Z' }
                ] },
                { from: '2', messages: [
                    { message: 'Hey! How are you Person2?', received: true, time: '2020-08-12T20:17:46.384Z' },
                    { message: 'I am good', received: false, time: '2020-08-12T20:17:47.384Z' },
                    { message: 'What is the plan?', received: false, time: '2020-08-12T20:17:48.384Z' }
                ] },
                { from: '3', messages: [
                    { message: 'Hey! How are you Person3?', received: true, time: '2020-08-12T20:17:46.384Z' },
                    { message: 'I am good', received: false, time: '2020-08-12T20:17:47.384Z' },
                    { message: 'What is the plan?', received: false, time: '2020-08-12T20:17:48.384Z' }
                ] },
                { from: '4', messages: [
                    { message: 'Hey! How are you Person4?', received: true, time: '2020-08-12T20:17:46.384Z' },
                    { message: 'I am good', received: false, time: '2020-08-12T20:17:47.384Z' },
                    { message: 'What is the plan?', received: false, time: '2020-08-12T20:17:48.384Z' }
                ] }
            ]
        }
    }

    /**
     * The person is updated in the context and actions are taken according to current person property.
     * @param {string} currentPerson Id of the new person to conversate
     */
    onPersonSelect = (currentPerson) => {
        this.setState({ currentPerson })
    }

    /**
     * The message sent from MessageInput is passed here which currently updates the state.
     * 
     * In future, this would even notify the message to backend while extending client the message cache.
     * @param {string} message 
     */
    onsendMessage = (message) => {
        const { currentPerson, messageList } = this.state
        const messageData = {
            message,
            received: false,
            time: new Date().toISOString()
        }
        for (var i in messageList) {
            const { from, messages } = messageList[i]
            if (from === currentPerson) {
                messages.push(messageData)
                break;
            }
        }
        this.setState({
            messageList
        })
    } 

    render() {
        /**
         * Here the components are arranged together and they communicate by updating the state
         */
        const { currentPerson, peopleList, messageList } = this.state

        return <div className="messenger-app">
            <SenderList peopleList={peopleList} onPersonSelect={this.onPersonSelect} currentPerson={currentPerson} />
            <div className="message-block">
                <MessageList messageList={messageList} currentPerson={currentPerson} />
                <MessageInput sendMessage={this.onsendMessage} currentPerson={currentPerson} />
            </div>
        </div>
    }
}

MessengerApp.defaultProps = {
};

export default MessengerApp;
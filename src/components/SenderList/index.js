import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './sender-list.scss';

/**
 * 
 * @param {Object} props 
 * peopleList {Array} List of people to conversate with
 * currentPerson {string} Current person user is conversating with
 * onPersonSelect {function} Updates the context of the current person
 */
const SenderList = (props) => {
    const { peopleList, currentPerson, onPersonSelect } = props
    /**
     * Here we should loop through peopleList and display the list of people
     * On click on a person's name would change the chat session to their window. 
     * */ 

    const onClick = (e) => {
      const id = e.target.getAttribute('data-id')
      onPersonSelect(id)
    }

    return (
      <div className="sender-list">
        {peopleList.map((person) => {
          const { id, name } = person
          return (
            <div 
              key={id}
              data-id={id}
              className={classNames('person', currentPerson === id && 'active')}
              onClick={onClick}>
                { name }
            </div>
          )
        })}
      </div>
    )
}

SenderList.defaultProps = {
  peopleList: [],
  onPersonSelect: () => {}
};

SenderList.propTypes = {
  peopleList: PropTypes.array,
  currentPerson: PropTypes.string.isRequired,
  onPersonSelect: PropTypes.func
}


export default SenderList;
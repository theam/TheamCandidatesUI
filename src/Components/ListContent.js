import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListElement from './ListElement.js'

export class ListContent extends Component {

  render () {
    const { content } = this.props
    return (
      <div className="list-content-container">
        { content.map(element => {
            return (
              <ListElement title={element}/>
            )
          })
        }
      </div>
    )
  }

}

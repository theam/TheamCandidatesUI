import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class ListTitle extends Component {

  render () {
    const { title, expandSymbol } = this.props
    return (
        <div className="list-title-container">
          <h1 className='title'>
            <a onClick={() => this.props.onResults()}>
              {expandSymbol}
            </a> {title}
          </h1>
        </div>
    )
  }
}

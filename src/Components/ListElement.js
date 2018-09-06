import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class ListElement extends Component {
  render() {
    const {title} = this.props
    return <h2 className="subtitle">{title}</h2>
  }
}

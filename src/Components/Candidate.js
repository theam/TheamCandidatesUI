import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Candidate extends Component {
  static porpTypes = {
    name: PropTypes.string
  }
  render() {
    const { Title, id, name, surname, statusId, hackerRankScore, creatorId, lastUserWhoUpdated, email, comments, pdfURL } = this.props

    return(
      { Title }
    )
  }
}

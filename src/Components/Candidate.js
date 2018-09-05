import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Candidate extends Component {
  static porpTypes = {
    id: PropTypes.string
  }
  render() {
    const { id, name, surname, statusId, hackerRankScore, creatorId, lastUserWhoUpdated, email, comments, pdfURL } = this.props

    return(

    )
  }
}

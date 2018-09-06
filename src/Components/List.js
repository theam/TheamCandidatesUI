import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Candidate } from './Candidate.js'
import { ListTitle } from './ListTitle.js'
import { ListContent } from './ListContent.js'

export class List extends Component {
  state = { expandSymbol: "+"}

  _expand = () => {
    this.state.expandSymbol === "+"
      ? this.setState({ expandSymbol: "-" })
      : this.setState({ expandSymbol: "+" })
  }

  render () {
    const { title, content = [] } = this.props

    return (
      <div className='list-container'>
        <ListTitle
          title={title}
          expandSymbol={this.state.expandSymbol}
          onResults={this._expand}/>
        { this.state.expandSymbol === "+"
          ? <ListContent content={[]}/>
          : <ListContent content={content}/>
        }

      </div>
    )
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class Pagination extends Component {
  constructor() {
    super()
    this.state = {page: 1}
  }

  handleClick = (e, page) => {
    e.preventDefault()
    this.setState({page})
    const { rows } = this.props
    const start = ((page - 1)*rows + 1)
    this.props.packageSearch({start: start})
  }

  renderPagination = () => {
    const { total, rows } = this.props
    const pages = Math.ceil(total / rows)
    let links = []

    if (total > rows) {
      for (let i = 1; i <= pages; i++ ) {
        if (i === this.state.page) {
          links.push(
            <li className="active" key={i}>
              <button type='button' onClick={e => this.handleClick(e, i)}>{i}</button>
            </li>
          )
        } else {
          links.push(
            <li key={i}>
              <button type='button' onClick={e => this.handleClick(e, i)}>{i}</button>
            </li>
          )
        }
      }
    }

    return links
  }

  render() {
    return (
      <ul>
        {this.renderPagination()}
      </ul>
    )
  }
}

export default connect(null, actions)(Pagination)
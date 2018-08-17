import React, { Component } from 'react'


class Pagination extends Component {
  renderPagination = () => {
    let links = []
    const { page, total, rows } = this.props
    const pages = Math.ceil(total / rows)

    if (total > rows) {
        for (let i = 1; i <= pages; i++ ) {
            if (i === page) {
                links.push(
                    <li className="active" key={i}>
                        <button type='button' onClick={e => this.props.handlePagination(e, i)}>{i}</button>
                    </li>
                )
            } else {
            links.push(
                <li key={i}>
                    <button type='button' onClick={e => this.props.handlePagination(e, i)}>{i}</button>
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

export default Pagination
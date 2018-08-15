import React, { Component } from 'react'

class Pagination extends Component {

  handleClick = (e, i) => {
    e.preventDefault()
    console.log(i)
  }

  renderPagination = () => {
    const perPage = 5
    const total = 375
    const pages = Math.floor(total / perPage)
    const page = 1
    let links = []

    if (total > perPage) {
      for (let i = 1; i <= pages; i++ ) {
        if (i === page) {
          links.push(<li className='active' key={i}><a href="#" onClick={e => this.handleClick(e, i)}>{i}</a></li>)
        } else {
          links.push(<li key={i}><a href="#" onClick={e => this.handleClick(e, i)}>{i}</a></li>)
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
import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';


class Pagination extends Component {
  render() {
    const { pageCount } = this.props
    if (pageCount > 1) {
        return (
            <ReactPaginate previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={ data => this.props.handlePagination(data.selected) }
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        )
    }

    return(null)
  }
}

export default Pagination
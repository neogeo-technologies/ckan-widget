import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';

import * as actions from '../../actions'


export class Pagination extends Component {
  handlePagination = page => {
    const { search, rows, sort } = this.props
    const start = page * rows

    this.props.packageSearch({ q: search, start: start, rows: rows, page: page, sort: sort })
  }

  render() {
    const { page, total, rows } = this.props;
    const pageCount = Math.ceil(total / rows)

    if (pageCount > 1) {
      return (
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel={<a role="button" className="page-link">...</a>}
          breakClassName="page-item disabled"
          forcePage={page}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={data => this.handlePagination(data.selected)}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="active"
          disabledClassName="disabled"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
        />
      );
    }

    return (null);
  }
}

const mapStateToProps = state => {
  return {
    search: state.packageSearch.search,
    sort: state.packageSearch.sort,
    rows: state.packageSearch.rows,
    total: state.packageSearch.total,
    page: state.packageSearch.page
  }
}

export default connect(mapStateToProps, actions)(Pagination)

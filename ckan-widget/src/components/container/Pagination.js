import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';

import * as actions from '../../actions'


export class Pagination extends Component {
  handlePagination = page => {
    const { search, rows, sort, ckanAPI, facet_search } = this.props
    const start = page * rows

    console.log(facet_search)

    this.props.packageSearch({ ckanAPI: ckanAPI, q: search, start: start, rows: rows, page: page, sort: sort, fq: facet_search })
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
    page: state.packageSearch.page,
    ckanAPI: state.packageSearch.ckanAPI,
    facet_search: state.packageSearch.facet_search
  }
}

export default connect(mapStateToProps, actions)(Pagination)

import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import cx from 'classnames'

import * as actions from '../../actions'

import styles from '../../css/bootstrap.module.css'
import overrideStyles from '../../css/app.module.css'

export class Pagination extends Component {
  handlePagination = page => {
    const {
      search,
      rows,
      sort,
      ckanAPI,
      facet_search,
      organizations,
      groups,
      tags
    } = this.props
    const start = page * rows

    this.props.packageSearch({
      ckanAPI: ckanAPI,
      q: search,
      start: start,
      rows: rows,
      page: page,
      sort: sort,
      fq: facet_search,
      organizations: organizations,
      groups: groups,
      tags: tags
    })
  }

  render() {
    const { page, total, rows } = this.props;
    const pageCount = Math.ceil(total / rows)

    if (pageCount > 1) {
      return (
        <ReactPaginate
          previousLabel="Précédent"
          nextLabel="Suivant"
          breakLabel={<div className={cx(styles['page-link'], overrideStyles['page-link'])}>...</div>}
          breakClassName={styles['page-item']}
          forcePage={page}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={data => this.handlePagination(data.selected)}
          containerClassName={styles['pagination']}
          subContainerClassName={cx(styles['pages'], styles['pagination'])}
          pageClassName={styles['page-item']}
          pageLinkClassName={cx(styles['page-link'], overrideStyles['page-link'])}
          activeClassName={styles['active']}
          disabledClassName={styles['disabled']}
          previousClassName={styles['page-item']}
          nextClassName={styles['page-item']}
          previousLinkClassName={cx(styles['page-link'], overrideStyles['page-link'])}
          nextLinkClassName={cx(styles['page-link'], overrideStyles['page-link'])}
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
    facet_search: state.packageSearch.facet_search,
    organizations: state.packageSearch.organizations,
    groups: state.packageSearch.groups,
    tags: state.packageSearch.tags
  }
}

export default connect(mapStateToProps, actions)(Pagination)

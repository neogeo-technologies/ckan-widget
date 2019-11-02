import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import cx from 'classnames'

import styles from '../../assets/bootstrap.module.css'

class Facet extends Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: true }
  }

  expandFacetList = (e) => {
    e.preventDefault()
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const facets = this.props.facetsInfo;
    const title = this.props.title;
    const collapseClass = this.state.collapsed ? 'collapse' : ''
    let expandArrow = this.state.collapsed ? 'expand_more' : 'expand_less'
    let expandLabel = this.state.collapsed ? 'Voir plus' : 'Voir moins'

    let fixedList = []
    let expandableList = []
    let expandControls = []

    if (facets.length > 7){
      expandControls.push(
          <div className={cx(styles['card-footer'], styles['px-0'], styles['py-0'])} key={9999}>
          <a href="!#" className={cx(styles['btn'], styles['btn-link'])} onClick={this.expandFacetList}>
              <MaterialIcon icon={expandArrow} color="inherit" size="tiny" />
              <span className={styles['ml-1']}>{expandLabel}</span>
          </a>
          </div>
      )
    }

    for (const facetId in facets) {
      if (facetId < 7) {
        fixedList.push(
          <li className={cx(styles['list-group-item'], styles['d-flex'], styles['justify-content-between'], styles['align-items-center'])} key={facetId} onClick={() => this.props.onClick(`${this.props.facetKey}:${facets[facetId].name}`)}>
            {facets[facetId].display_name}
            {' '}
            <span className={cx(styles['badge'], styles['badge-primary'])}>{facets[facetId].count}</span>
          </li>,
        );
      }
    }

    for (const facetId in facets) {
      if (facetId > 6) {
        expandableList.push(
          <li className={cx(styles['list-group-item'], styles['d-flex'], styles['justify-content-between'], styles['align-items-center'])} key={facetId} onClick={() => this.props.onClick(`${this.props.facetKey}:${facets[facetId].name}`)}>
            {facets[facetId].display_name}
            {' '}
            <span className={cx(styles['badge'], styles['badge-primary'])}>{facets[facetId].count}</span>
          </li>,
        );
      }
    }

    return (
      <div className={cx(styles['card'], styles['my-3'])}>
        <div className={cx(styles['card-header'], styles['bg-secondary'], styles['text-white'])}>
          <h5 className={cx(styles['card-title'], styles['mb-auto'])}>
            {title}
          </h5>
        </div>
        <ul className={cx(styles['list-group'], styles['list-group-facet'], styles['list-group-flush'])}>
          {fixedList}
        </ul>
        <div className={styles[collapseClass]}>
          <ul className={cx(styles['list-group'], styles['list-group-facet'], styles['list-group-flush'])}>
            {expandableList}
          </ul>
        </div>
        {expandControls}
      </div>
    );
  }
}

export default Facet;

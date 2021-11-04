import React, { Component } from 'react';
import cx from 'classnames'

import styles from '../../css/bootstrap.module.css'

class Facet extends Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: true }
  }

  expandFacetList = (e) => {
    e.preventDefault()
    this.setState({ collapsed: !this.state.collapsed })
  }

  renderArrow() {
    if (this.state.collapsed) {
        return (<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="20" style={{position: 'absolute', right: '15px'}}><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
        )
    } else {
        return(<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="20" style={{position: 'absolute', right: '15px'}}><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>)
    }
}

  render() {
    const facets = this.props.facetsInfo;
    const title = this.props.title;
    const collapseClass = this.state.collapsed ? 'collapse' : ''
    let expandLabel = this.state.collapsed ? 'Voir plus' : 'Voir moins'

    let fixedList = []
    let expandableList = []
    let expandControls = []

    if (facets.length > 7){
      expandControls.push(
          <div className={cx(styles['card-footer'], styles['px-0'], styles['py-0'])} key={9999}>
          <a href="!#" className={cx(styles['btn'], styles['btn-link'])} onClick={this.expandFacetList}>
              {this.renderArrow()}
              <span className={styles['ml-1']}>{expandLabel}</span>
          </a>
          </div>
      )
    }

    for (const facetId in facets) {
      if (facetId < 7) {
        fixedList.push(
          <li className={cx('hover-style--with-bg', styles['list-group-item'], styles['d-flex'], styles['justify-content-between'], styles['align-items-center'])} key={facetId} onClick={() => this.props.onClick(`${this.props.facetKey}:${facets[facetId].name}`)}>
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
          <li className={cx('hover-style--with-bg', styles['list-group-item'], styles['d-flex'], styles['justify-content-between'], styles['align-items-center'])} key={facetId} onClick={() => this.props.onClick(`${this.props.facetKey}:${facets[facetId].name}`)}>
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

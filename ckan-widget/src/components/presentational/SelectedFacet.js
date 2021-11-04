import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import styles from '../../css/bootstrap.module.css'

class SelectedFacet extends Component {

  render() {
    const { facet, search_facets, organizations, } = this.props

    const facetType = facet.split(':')[0]
    let name = facet.split(':')[1]
    if (name !== undefined) {
      name = name.replace(/"/g, "")
    }

    let facetTitle = ''
    let facetName = ''
    const selectedFacetType = search_facets[facetType]

    if ( selectedFacetType !== undefined) {
      const itemsFacetType = selectedFacetType.items

      itemsFacetType.forEach((type, i) => {
        if (type.name === name) {
          facetTitle = type.display_name
          facetName = type.name
        }
      })
    }

    // TODO : si le facetTitle correspond à un élément de configuration par defaut, on n'affiche pas
    if (facetTitle !== '' && organizations.indexOf(facetName) === -1){
      return (
        <li className={cx(styles['list-inline-item'], styles['btn'], styles['btn-primary'])} onClick={e => this.props.onClick(facet)}>
          <span className={styles['mx-2']}>{facetTitle}</span>
          <span className={'hover-style'}>{/* <MaterialIcon icon="close" size="tiny" /> */}</span>
        </li>
      );
    }

    return(null)
  }
}

//export default SelectedFacet
const mapStateToProps = state => {
  return {
    search: state.packageSearch.search,
    search_facets: state.packageSearch.search_facets,
    organizations: state.packageSearch.organizations,
    groups: state.packageSearch.groups,
    tags: state.packageSearch.tags,
    rows: state.packageSearch.rows,
    sort: state.packageSearch.sort,
    facet_search: state.packageSearch.facet_search,
    ckanAPI: state.packageSearch.ckanAPI
  }
}
export default connect(mapStateToProps)(SelectedFacet)

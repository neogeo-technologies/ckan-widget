import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import styles from '../../css/bootstrap.module.css'

class Sort extends Component {
  render() {
    return (
      <div className={styles['mr-0']}>
        <div className={styles['input-group']}>
          <div className={styles['input-group-prepend']}>
              <label htmlFor="order_by" title="Order by" className={styles['input-group-text']}><MaterialIcon icon="sort" /></label>
          </div>
          <select id="order_by" className={styles['custom-select']} value={this.props.sort} onChange={e => this.props.handleSort(e.target.value)}>
            <option value="score desc, metadata_modified desc">Pertinence</option>
            <option value="title_string asc">Nom (A->Z)</option>
            <option value="title_string desc">Nom (Z->A)</option>
            <option value="metadata_modified desc">Dernière modification</option>
            <option value="views_recent desc">Popularité</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Sort;

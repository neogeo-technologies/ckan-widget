import React, { Component } from 'react';

import styles from '../../css/bootstrap.module.css'

class Sort extends Component {
  render() {
    return (
      <div className={styles['mr-0']}>
        <div className={styles['input-group']}>
          <div className={styles['input-group-prepend']}>
              <label htmlFor="order_by" title="Order by" className={styles['input-group-text']}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" fill="rgba(0, 0, 0, 0.54)" /></svg></label>
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

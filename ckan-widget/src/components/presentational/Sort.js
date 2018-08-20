import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="dropdown">
        <select value={this.props.sort} onChange={e => this.props.handleSort(e.target.value)}>
            <option value="score desc, metadata_modified desc">Relevance</option>
            <option value="title_string asc">Name Ascending</option>
            <option value="title_string desc">Name Descending</option>
            <option value="metadata_modified desc">Last Modified</option>
            <option value="views_recent desc">Popular</option>
          </select>
      </div>
    );
  }
}

export default Sort;

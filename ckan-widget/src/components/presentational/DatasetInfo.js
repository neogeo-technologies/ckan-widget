import React, { Component } from 'react'

class DatasetInfo extends Component{

    render(){
        const { title, notes, metadata_modified, format, datatype } = this.props
        return(
           <div className="dataset-item">
                <img className="dataset-icon" src="https://www.datasud.fr/wp-content/themes/crigepaca/assets/images/logo_region_paca.jpg" alt="Image" />
                <div className="dataset-body">
                <h2>{ title }</h2>
                  <span>
                  { notes }
                  </span>

                <p>Modified: {metadata_modified}</p>
                <p>Formats: {format}</p>
                <p>Datatype: {datatype}</p>
              </div>
           </div>
        )
    }
}
export default DatasetInfo;
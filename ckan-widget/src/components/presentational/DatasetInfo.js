import React, { Component } from 'react'

class DatasetInfo extends Component{

    formatDate = date => {
        const d = new Date(date )
        return d.toUTCString()
    }

    findFormats = resources => {
        let formats = []

        if (Array.isArray(resources) && resources.length){
            resources.forEach( resource => {
                const format = resource.format
                if (!formats.includes(format)) {
                    formats.push(format)
                }
            })
        }

        return formats
    }

    render(){
        const { title, notes, metadata_modified, datatype, resources } = this.props
        const datetime = this.formatDate(metadata_modified)
        const formats = this.findFormats(resources)
        return(
           <div className="dataset-item">
              <img className="dataset-icon" src="https://www.datasud.fr/wp-content/themes/crigepaca/assets/images/logo_region_paca.jpg" alt="Image" />
              <div className="dataset-body">
                <h2>{title}</h2>
                <span>{notes}</span>
                <p>Modified: {datetime}</p>
                <p>Formats: {formats !== undefined ? formats.join(', ') : 'N/A'}</p>
                <p>Datatype: {datatype !== undefined ? datatype.join(', ') : 'N/A'}</p>
              </div>
           </div>
        )
    }
}
export default DatasetInfo;

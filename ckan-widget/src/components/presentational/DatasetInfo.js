import React, { Component } from 'react'
import DatasetDetails from '../presentational/DatasetDetails'


class DatasetInfo extends Component{
    constructor(props) {
        super(props)
        this.state = { collapsed: true }
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

    formatDate = date => {
        const d = new Date(date )
        return d.toUTCString()
    }

    handleDatasetClick = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render(){
        const { title, notes, metadata_modified, datatype, resources } = this.props
        const datetime = this.formatDate(metadata_modified)
        const formats = this.findFormats(resources)
        return(
            <div className="dataset-item" onClick={this.handleDatasetClick}>
                <img className="dataset-icon" src="https://www.datasud.fr/wp-content/themes/crigepaca/assets/images/logo_region_paca.jpg" alt="Description" />
                <div className="dataset-body">
                    <h2 onClick={this.handleDatasetClick}>{title}</h2>
                    <span>{notes.length > 130 ? `${notes.substring(0, 130)}...` : notes}</span>
                    <p>Modified: {datetime}</p>
                    <p>Formats: {formats !== undefined ? formats.join(', ') : 'N/A'}</p>
                    <p>Datatype: {datatype !== undefined ? datatype.join(', ') : 'N/A'}</p>
                </div>
                <DatasetDetails collapsed={this.state.collapsed} {...this.props} />
            </div>
        )
    }
}
export default DatasetInfo;

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
            resources.forEach( (resource, i) => {
                const format = resource.format
                if (!formats.includes(format)) {
                    formats.push(
                      <span className="badge badge-secondary mx-1" key={i}>
                      {format}
                      </span>
                    )
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
        const collapseClass = this.state.collapsed ? '' : 'collapsed'
        const expandArrow = this.state.collapsed ? 'expand_more' : 'expand_less'

        return(
            <div className={"card dataset-wrap my-3 " + collapseClass}>
                <div className="dataset card-body" onClick={this.handleDatasetClick}>
                    <i className="material-icons">{expandArrow}</i>
                    <div className="row">
                        <div className="col-lg-3 d-flex justify-content-lg-center align-items-center mb-lg-0 mb-md-3">
                            <img className="img-thumbnail img-fluid" src="https://www.datasud.fr/wp-content/themes/crigepaca/assets/images/logo_region_paca.jpg" alt="logo" />
                        </div>
                        <div className="col-lg-9">
                            <h4 className="title text-primary">{title}</h4>
                            <p className="text-muted">{notes && notes.length > 130 ? `${notes.substring(0, 130)}...` : notes}</p>
                            <ul className="list-unstyled">
                              <li><strong>Modified:</strong> {datetime}</li>
                              <li className="d-flex m-auto align-items-center"><strong>Formats:</strong> {formats !== undefined ? formats : 'N/A'}</li>
                              <li><strong>Datatype:</strong> {datatype !== undefined ? datatype.join(', ') : 'N/A'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <DatasetDetails collapsed={this.state.collapsed} {...this.props} />
            </div>
        )
    }
}
export default DatasetInfo;

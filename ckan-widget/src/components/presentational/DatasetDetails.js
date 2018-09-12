import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'

class DatasetDetails extends Component {
    renderResources = (resources, datasetName) => {
        let items = []
        resources.forEach((resource, i) => {
            let restricted = resource.restricted ? JSON.parse(resource.restricted) : 'N/A'
            items.push(
                <li className="list-group-item d-flex flex-wrap align-items-center" key={i}>
                    <span className="type">
                        <span className="badge badge-secondary">{resource.format}</span>
                    </span>
                    <a className="px-3 title" href={resource.url}>{resource.name}</a>
                    <span className="ml-auto mr-3 date">{this.formatDate(resource.last_modified)}</span>
                    <span className="visibility">
                        <span className="badge badge-pill badge-dark">{restricted.level}</span>
                    </span>
                </li>
            )
        })

        return items
    }

    formatDate = date => {
        const d = new Date(date)
        return d.toUTCString()
    }

    render() {
        const {
            name,
            notes,
            resources,
            dataset_creation_date,
            dataset_modification_date,
            dataset_publication_date,
            organization,
            collapsed
        } = this.props
        const orgName = organization !== null ? organization.name : 'N/A'
        const collapseClass = collapsed ? 'collapse' : ''

        return(
            <div className={"card-footer px-5 py-4 " + collapseClass}>
                <p className="lead">{notes}</p>
                <hr/>
                <ul className="text-muted list-inline">
                    <li className="list-inline-item"><strong>Created on:</strong> {dataset_creation_date}</li>
                    <li className="list-inline-item"><strong>Publication date:</strong> {dataset_publication_date}</li>
                    <li className="list-inline-item"><strong>Modification date:</strong> {dataset_modification_date}</li>
                    <li className="list-inline-item"><strong>Organization:</strong> {orgName}</li>
                </ul>
                <div className="my-4">
                    <h3>Resources</h3>
                    <ul className="list-inline">
                        { this.renderResources(resources, name) }
                    </ul>
                </div>
                <a className="btn btn-success mb-1" href={`https://trouver.datasud.fr/dataset/${name}`}>
                    <MaterialIcon icon="open_in_new" size="tiny" color="#fff" />
                    <span className="ml-1">View on Datasud.fr</span>
                </a>
            </div>
        )
    }
}

export default DatasetDetails

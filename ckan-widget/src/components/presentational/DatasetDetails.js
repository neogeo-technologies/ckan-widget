import React, { Component } from 'react'

class DatasetDetails extends Component {
    renderResources = (resources, datasetName) => {
        let items = []
        resources.forEach((resource, i) => {
            let restricted = JSON.parse(resource.restricted)
            items.push(
                <li className="list-group-item d-flex align-items-center" key={i}>
                    <span className="badge badge-secondary">{resource.format}</span>
                    <a className="px-3" href={`https://trouver.datasud.fr/dataset/${datasetName}/resource/${resource.id}`}>{resource.name}</a>
                    <span className="ml-auto">Last modified at {this.formatDate(resource.last_modified)}</span>
                    <span className="badge badge-secondary">{restricted.level}</span>
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
            <div className={"card-footer " + collapseClass}>
                <p className="lead">{notes}</p>
                <ul className="list-inline">
                    <li className="list-inline-item">Created on: {dataset_creation_date}</li>
                    <li className="list-inline-item">Publication date: {dataset_publication_date}</li>
                    <li className="list-inline-item">Modification date: {dataset_modification_date}</li>
                    <li className="list-inline-item">Organization: {orgName}</li>
                </ul>
                <h3>Resources</h3>
                <ul className="list-inline">
                    { this.renderResources(resources, name) }
                </ul>
                <a className="btn btn-success mb-1" href={`https://trouver.datasud.fr/dataset/${name}`}><i className="material-icons mr-1">open_in_new</i> View on Datasud.fr</a>
            </div>
        )
    }
}

export default DatasetDetails

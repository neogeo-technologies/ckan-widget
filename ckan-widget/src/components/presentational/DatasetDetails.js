import React, { Component } from 'react'

class DatasetDetails extends Component {
    renderResources = (resources, datasetName) => {
        let items = []
        resources.forEach((resource, i) => {
            items.push(
                <li key={i}>
                    <span>{resource.format}</span>
                    <strong>
                        <a href={`https://trouver.datasud.fr/dataset/${datasetName}/resource/${resource.id}`}>{resource.name}</a>
                    </strong>
                    <span>Modification date: {this.formatDate(resource.last_modified)}</span>
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
                <p>{notes}</p>
                <p>Created on: {dataset_creation_date}</p>
                <p>Publication date: {dataset_publication_date}</p>
                <p>Modification date: {dataset_modification_date}</p>
                <p>Organization: {orgName}</p>
                <h3>Resources</h3>
                <ul className="list-inline">
                    { this.renderResources(resources, name) }
                </ul>
                <p>
                    <a className="btn btn-success" href={`https://trouver.datasud.fr/dataset/${name}`}>Display this dataset in Datasud.fr</a>
                </p>
            </div>
        )
    }
}

export default DatasetDetails

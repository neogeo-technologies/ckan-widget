import React, { Component } from 'react'
import DatasetDetails from '../presentational/DatasetDetails'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import rehypeTruncate from "rehype-truncate";

import styles from '../../css/bootstrap.module.css'
import overrideStyles from '../../css/app.module.css'


class DatasetInfo extends Component{
    constructor(props) {
        super(props)
        this.state = { collapsed: true }
    }

    findFormats = resources => {
        let formats = []
        let badges = []

        if (Array.isArray(resources) && resources.length){
            resources.forEach( (resource, i) => {
                const format = resource.format
                if (!formats.includes(format)) {
                    formats.push(format)
                    badges.push(
                      <span className={cx(styles['badge'], styles['badge-secondary'], styles['mx-1'])} key={i}>
                      {format}
                      </span>
                    )
                }
            })
        }

        return badges
    }

    formatDate = date => {
        const d = new Date(date)
        return d.toLocaleDateString(navigator.language || 'fr-FR')
    }

    handleDatasetClick = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    renderThumbnail = thumbnail => {
        const { thumbnailsDisplay } = this.props
        if (thumbnailsDisplay) {
            return(
                <div className={cx(styles['col-lg-3'], styles['d-flex'], styles['justify-content-lg-center'], styles['align-items-center'], styles['mb-lg-0'], styles['mb-md-3'])}>
                        { thumbnail !== undefined && thumbnail !== "" &&
                            <img className={cx(styles['img-thumbnail'], styles['img-fluid'])} src={thumbnail} alt='logo' /> }
                </div>
            )
        }

        return null
    }

    renderTypes = (datatype, search_facets) => {
        let types = []
        if (datatype !== undefined && datatype.length > 0) {
            const datatypeItems = search_facets.datatype.items
            datatypeItems.forEach((type, i) => {
                if (datatype.includes(type.name)) {
                    types.push(type.display_name)
                }
            })
        }

        return(
            <span><strong>Type&nbsp;:</strong> {types.length > 0 ? types.join(', ') : 'N/A'}</span>
        )
    }

    renderArrow() {
        if (this.state.collapsed) {
            return (<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{position: 'absolute', right: '15px'}}><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
            )
        } else {
            return(<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{position: 'absolute', right: '15px'}}><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (((nextState.collapsed === this.state.collapsed) && this.state.collapsed === false)) {
            this.setState({ collapsed: true })
        }

        return true;
    }

    render(){
        const { ckanAPI, linkToCKANLabel, title, notes, metadata_modified, datatype, resources, thumbnail, search_facets } = this.props
        const datetime = this.formatDate(metadata_modified)
        const formats = this.findFormats(resources)
        const collapseClass = this.state.collapsed ? '' : 'collapsed'

        return(
            <div className={cx(styles['card'], styles['dataset-wrap'], overrideStyles['dataset-wrap'], styles['my-3'], styles[collapseClass], overrideStyles[collapseClass])}>
                <div className={`${cx(styles['dataset'], overrideStyles['dataset'], styles['card-body'])} dataset`} onClick={this.handleDatasetClick}>
                    {this.renderArrow()}
                    <div className={styles['row']}>
                        { this.renderThumbnail(thumbnail) }
                        <div className={styles['col-lg-9']}>
                            <h4 className={cx(styles['title'], overrideStyles['title'], styles['text-primary'])}>{title}</h4>
                            <ReactMarkdown className={cx(styles['text-muted'], overrideStyles['markdown-preview'])} children={notes} rehypePlugins={[rehypeTruncate]} />
                            <ul className={styles['list-unstyled']}>
                                <li><strong>Modifié le&nbsp;:</strong> {datetime}</li>
                                <li>
                                    <strong>Formats&nbsp;:</strong> {formats.length > 0 ? formats : 'N/A'}
                                </li>
                                <li>
                                    {this.renderTypes(datatype, search_facets)}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <DatasetDetails ckanAPI={ckanAPI} linkToCKANLabel={linkToCKANLabel} collapsed={this.state.collapsed} {...this.props} />
            </div>
        )
    }
}
export default DatasetInfo;

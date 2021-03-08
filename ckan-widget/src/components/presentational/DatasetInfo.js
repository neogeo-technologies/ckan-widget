import React, { Component } from 'react'
import DatasetDetails from '../presentational/DatasetDetails'
import MaterialIcon from 'material-icons-react'
import cx from 'classnames'

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
        const d = new Date(date )
        //alert(d.)
        return d.toLocaleDateString('fr-FR')
    }

    handleDatasetClick = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    renderThumbnail = thumbnail => {
        const { thumbnailsDisplay } = this.props
        if (thumbnailsDisplay && thumbnail !== undefined) {
            return(
                <div className={cx(styles['col-lg-3'], styles['d-flex'], styles['justify-content-lg-center'], styles['align-items-center'], styles['mb-lg-0'], styles['mb-md-3'])}>
                    <img className={cx(styles['img-thumbnail'], styles['img-fluid'])} src={thumbnail} alt="logo" />
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
            <span><strong>Type :</strong> {types.length > 0 ? types.join(', ') : 'N/A'}</span>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (((nextState.collapsed === this.state.collapsed) && this.state.collapsed === false)) {
            this.setState({ collapsed: true })
        }

        return true;
    }

    render(){
        const { ckanAPI, title, notes, metadata_modified, datatype, resources, thumbnail, search_facets } = this.props
        const datetime = this.formatDate(metadata_modified)
        const formats = this.findFormats(resources)
        const collapseClass = this.state.collapsed ? '' : 'collapsed'
        const expandArrow = this.state.collapsed ? 'expand_more' : 'expand_less'

        return(
            <div className={cx(styles['card'], styles['dataset-wrap'], overrideStyles['dataset-wrap'], styles['my-3'], styles[collapseClass], overrideStyles[collapseClass])}>
                <div className={`${cx(styles['dataset'], overrideStyles['dataset'], styles['card-body'])} dataset`} onClick={this.handleDatasetClick}>
                    <i className={`${cx(styles['md-24'], styles['md-dark'])} material-icons`} style={{position: 'absolute', right: '15px'}}>expand_more</i>
                    <div className={styles['row']}>
                        { this.renderThumbnail(thumbnail) }
                        <div className={styles['col-lg-9']}>
                            <h4 className={cx(styles['title'], overrideStyles['title'], styles['text-primary'])}>{title}</h4>
                            <p className={styles['text-muted']}>{notes && notes.length > 130 ? `${notes.substring(0, 130)}...` : notes}</p>
                            <ul className={styles['list-unstyled']}>
                                <li><strong>Modifié le :</strong> {datetime}</li>
                                <li>
                                    <strong>Formats:</strong> {formats.length > 0 ? formats : 'N/A'}
                                </li>
                                <li>
                                    {this.renderTypes(datatype, search_facets)}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <DatasetDetails ckanAPI={ckanAPI} collapsed={this.state.collapsed} {...this.props} />
            </div>
        )
    }
}
export default DatasetInfo;

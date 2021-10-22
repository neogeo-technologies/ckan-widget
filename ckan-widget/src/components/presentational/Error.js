import React, { Component } from 'react'
import cx from 'classnames'

import styles from '../../css/bootstrap.module.css'

class Error extends Component {
    constructor() {
        super()
        this.state = { show: true }
    }

    handleClose = e => {
        this.setState({ show: false })
    }

	render() {
        if (this.state.show) {
            return(
                <div className={cx(styles['my-3'], styles['alert'], styles['alert-warning'], styles['alert-dismissible'])} role="alert">
                    <strong>Upps, error!</strong> {this.props.error};
                    <button type="button" className={styles['close']} data-dismiss="alert" aria-label="Close" onClick={this.handleClose}>
                   <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                    </button>
                </div>
            )
        }

        return(null)
  	}
}

export default Error

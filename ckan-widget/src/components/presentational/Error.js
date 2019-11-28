import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'
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
                    <MaterialIcon icon="close" size="tiny" color="inherit" />
                    </button>
                </div>
            )
        }

        return(null)
  	}
}

export default Error

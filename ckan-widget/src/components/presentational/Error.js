import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'

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
                <div className="my-3 alert alert-warning alert-dismissible" role="alert">
                    <strong>Upps, error!</strong> {this.props.error};
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleClose}>
                    <MaterialIcon icon="close" size="tiny" color="inherit" />
                    </button>
                </div>
            )
        }

        return(null)
  	}
}

export default Error

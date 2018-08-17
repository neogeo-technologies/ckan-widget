import React, { Component } from 'react'

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
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Upps, error!</strong> { this.props.error }
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        }

        return(null)
  	}
}

export default Error
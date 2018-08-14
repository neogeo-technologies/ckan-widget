import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'


class Test extends Component {
    componentDidMount() {
        this.props.packageSearch()
    }

    showDatasets() {
        this.props.packageSearch()
    }

    render() {
        return(
            <div>
                <button onClick={this.showDatasets.bind(this)}>
                    Show datasets
                </button>
                { console.log(this.props) }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        datasets: state.packageSearch.datasets,
        total: state.packageSearch.total
    }
}

export default connect(mapStateToProps, actions)(Test)
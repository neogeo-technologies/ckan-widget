import React, { Component } from 'react'


class Facet extends Component{
    render(){
        return(
            <div className="facet-item">
                <h3>{this.props.title}</h3>
                <div>
                    <p>desc</p>
                    <span>3</span>
                </div>
            </div>
        )
    }
}

export default Facet;
import React, { Component } from 'react'

export default class RegularComp extends Component {
    render() {
        console.log("regular")
        return (
            <div>
                Regular component: {this.props.number}
            </div>
        )
    }
}

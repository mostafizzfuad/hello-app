import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    render() {
        console.log("pure")
        return (
            <div>
                <h1>Pure component: {this.props.number}</h1>
            </div>
        )
    }
}

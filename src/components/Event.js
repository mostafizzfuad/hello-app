import React, { Component } from 'react'
import EventChild from './EventChild'

export default class Event extends Component {
    constructor(props) {
        super(props)

        this.state = {
            step: 0,
            message: 'Testing...'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    // receive arguments
    clickHandler = (msg) => {
        this.setState({
            step: this.state.step + 1,
            message: msg,
        })
    }

    render() {
        return (
            <div>
                <h1>Step : {this.state.step}</h1>
                <h1>Message : {this.state.message}</h1>
                {/* passing props */}
                <EventChild clickHandler={this.clickHandler} /> 
            </div>
        )
    }
}



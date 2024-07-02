import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countNumber: 0
        }
    }

    incrementCounter() {
        this.setState({
            countNumber: this.state.countNumber + 1
        })
    }

    decrementCounter() {
        this.setState({
            countNumber: this.state.countNumber - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.countNumber}</h1>
                <button onClick={() => this.incrementCounter()}>Increase</button>
                <button onClick={() => this.decrementCounter()}>Decrease</button>
            </div>
        )
    }
}



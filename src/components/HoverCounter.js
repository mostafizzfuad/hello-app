import React, { Component } from 'react'
import CounterWrapper from '../utls/counterWrapper'

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h1>Count: {this.props.count}</h1>
                <button onMouseOver={this.props.incrementHandler}>IncrementTen</button>
            </div>
        )
    }
}

export default CounterWrapper(HoverCounter, 10)
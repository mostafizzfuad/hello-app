import React, { Component } from 'react'
import ChildComp from './ChildComp';

export default class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 10,
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                number: 20,
            })
        }, 1000);
    }

    render() {
        console.log("parent")
        return (
            <div>
                <h1>Parent Component</h1>
                <ChildComp number={this.state.number} />
            </div>
        )
    }
}

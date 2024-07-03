import React, { Component } from 'react'

export default class LifecycleMounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Mostafizur"
        }

        console.log("constructor run")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("static getDerivedStateFromProps run")
    }

    componentDidMount() {
        console.log("componentDidMount run")
    }

    render() {
        console.log("render run")
        return (
            <div>
                <h1>LifecycleMounting</h1>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class LifecycleUpdating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Mostafizur"
        }

        console.log("constructor run")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("static getDerivedStateFromProps run")
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount run")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    updateState = () => {
        this.setState({
            name: "Siam"
        })
    }

    render() {
        console.log("render run")
        return (
            <div>
                <button onClick={this.updateState}>Update State</button>
            </div>
        )
    }
}


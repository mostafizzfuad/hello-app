import React, { Component } from 'react'

export default class Batman extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "Mostafizur",
        }

        this.superheroref = React.createRef();
    }

    changeColor() {
        console.log(this.superheroref.current)
        this.superheroref.current.style.color = "crimson";
        this.superheroref.current.style.fontSize = "5rem";
    }

    render() {
        return (
            <div>
                <h1 className='superhero' ref={this.superheroref}>Batman</h1>
                <button onClick={() => this.changeColor()}>Change Color</button>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            skill: "",
        }
    }

    firstNameHandler(e) {
        // console.log(e.target.value)
        this.setState({
            firstName: e.target.value
        })
    }

    skillHandler(e) {
        // console.log(e.target.value)
        this.setState({
            skill: e.target.value
        })
    }

    submitHandler(e) {
        e.preventDefault();
        console.log(`Name : ${this.state.firstName} , Skill : ${this.state.skill}`);
    }

    render() {
        return (
            <div>
                <form action="#" onSubmit={(e) => this.submitHandler(e)}>
                    <div>
                        <label htmlFor="firstName">First Name : </label>
                        <input required type="text" id='firstName' value={this.state.firstName} onChange={(e) => this.firstNameHandler(e)} />
                    </div>
                    <div>
                        <span>Skill : </span>
                        <select required value={this.state.skill} onChange={(e) => this.skillHandler(e)}>
                            <option value="">select your skill</option>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                            <option value="laravel">Laravel</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

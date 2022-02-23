import { Component } from "react";

export default class DataBinding extends Component {
    constructor() {
        super();
        this.state = {
            name: 
        };
    }

    enterName(event){
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return(
            <>
            <label>Enter Name: </label>
            <input type="text" name="name" onChange={(event) => this.nameEnter(event)}/>
            <h5>Name Entered is: {this.state.name}</h5>
            </>
        )
    }
}
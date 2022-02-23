import React, { Component } from 'react';
// import FormChild from './FormChild';
import App from ".././components/UserListComponent.js";
import userList from ".././data/userList.js";

class Form extends Component {
  constructor() {
    super();
    this.state = {
        formtext: "",
        data: userList
    }
  }

  handleChange(event){
    debugger;
      this.formtext = event.target.value;
      if (this.formtext !== "") {
        this.setState({
        data : this.state.data.filter((user) => {
            return user.id.startsWith(this.formtext)
          })
        });
      } 
      else {
        this.state.data= userList
        debugger;
      }
    }
  render() {
    return (
      <div>
        <label>Enter id</label>
        <input id='formtext' onChange={(event) => this.handleChange(event)} />
        <br />
        <p>The name entered is {this.state.formtext}</p>

        <App detail={this.state.data}> </App>
      </div>
    )
    debugger;
  }
}

export default Form;
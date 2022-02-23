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
        this.data = userList.filter((user) => {
          return userList.name.toLowerCase().startsWith(this.formtext.toLowerCase());
        });
      } else {
      }
    }
      debugger;
//   handleChange = event => {
//     this.setState({
//         formtext: event.target.value,

//         // data = userList.filter( return { userList.id  })
        
//         data : userList.filter( id => {
//             return this.state.id == this.state.formtext
//         })
//     })
//     debugger;
//   }

  render() {
    return (
      <div>
        {/* <h3>enter details to be searched:</h3>
        <input placeholder="Enter name" onChange={this.handleChange(event)} value = {this.state.formtext}/>
        <FormChild display = {this.state.formtext}/> */}

        <label>Enter id</label>
        <input id='formtext' onChange={(event) => this.handleChange(event)} />
        <br />
        <p>The name entered is {this.state.formtext}</p>

        <App UserListComponent={this.state.data}> </App>
      </div>
    )
  }
}

export default Form;
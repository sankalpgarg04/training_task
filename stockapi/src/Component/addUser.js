import React, { Component } from "react";
import axios from "axios";

class addUser extends Component {
  state = {
    accountNumber: 0,
    name: "",
    address: "",
    email: "sg@gmail.com",
    ifsc: "12345",
    balance: 0,
    creditScore: 1000,
    password: "sankalp"
  };

  onNumberChange = e => {
    this.setState({
        accountNumber : e.target.value
    });
  };

  onNameChange = e => {
    this.setState({
      name : e.target.value
    });
  };

  onAddressChange = e => {
    this.setState({
      address : e.target.value
    });
  };

  onBalanceChange = e => {
    this.setState({
      balance : e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      accountNumber : this.state.accountNumber,
      name : this.state.name,
      address : this.state.address,
      balance : this.state.balance,
      email: "sg@gmail.com",
    ifsc: "12345",
    creditScore: 1000,
    password: "sankalp"
    };
    axios
      .post("https://localhost:5001/api/BankDb/Postaccount", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="addUser">
        <form className="addUser" onSubmit={this.handleSubmit}>
          <input
            placeholder="Account Number" value={this.state.accountNumber}
            onChange={this.onNumberChange} required
          />
            <input
            placeholder="Customer Name" value={this.state.name}
            onChange={this.onNameChange} required
          />

            <input
            placeholder="Address" value={this.state.address}
            onChange={this.onAddressChange} required
          />

            <input
            placeholder="Balance" value={this.state.balance}
            onChange={this.onBalanceChange} required
          />

          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default addUser;
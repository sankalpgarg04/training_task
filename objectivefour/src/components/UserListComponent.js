import UserDetailsComponent from "./UserDetailsComponent";
import React, { Component } from 'react';
import axios from 'axios';

export default class UserListComponent extends Component {
    constructor(){
        super();
        this.state={
            'accountdetail':[]
        }
    }
    // debugger;
    render(){
    return (
        <div>
            <h1>Employee List is Given Below...</h1>
            <div>
                <UserDetailsComponent detail= {this.state.accountdetail}></UserDetailsComponent>
            </div>
        </div>
    )
}
componentDidMount(){
    var dataPromise=axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
    dataPromise.then((response)=>{
        debugger;
        this.setState({
            accountdetail: response.data
        })
        debugger;
    })
}
}
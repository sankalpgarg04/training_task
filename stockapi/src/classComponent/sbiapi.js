import Displaydata from "../Component/displaydata.js";
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
            <div>
                <Displaydata detail= {this.state.accountdetail.data}></Displaydata>
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
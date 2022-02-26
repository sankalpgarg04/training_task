import Displaydata from "../Component/displaydata.js";
import React, { Component } from 'react';
import axios from 'axios';

export default class UserListComponent extends Component {
    constructor(){
        super();
        this.state={
            'accountdetail':[],
            'search':""
        }
    }
    // debugger;
    render(){
    return (
        <div>
            <div>
            <input
                placeholder="search keyword" value={this.state.search}
                onChange={this.onSearchChange} required
            />
                <Displaydata detail= {this.state.accountdetail.data}></Displaydata>
            </div>
        </div>
    )
}
componentDidMount(){
    var dataPromise=axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/"+{search});
    dataPromise.then((response)=>{
        debugger;
        this.setState({
            accountdetail: response.data
        })
        debugger;
    })
}
}
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FunctionalState(){
    var [counter, setCounter]=useState(0);
    var [accountdetail,setAccountDetail]=useState("");
    debugger;
    // useEffect(()=>{
    //     console.log("welcome");
    // },[])
    useEffect(()=>{
        var dataPromise=axios.get("https://localhost:5001/api/BankDb/Getaccount/101");
    dataPromise.then((response)=>{
        debugger;
        setAccountDetail(response.data);
        debugger;
    })
    },[])
    return(
        <div>
            <h1> Your account number is {accountdetail.accountNumber} </h1>
        </div>
    )
}

//grand_grand_parent -> haryana 
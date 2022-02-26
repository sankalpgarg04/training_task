import { useState, useEffect } from 'react';
import axios from 'axios';
import AccountDetailsComponent from './AccountDetailComponent';

export default function GetHook(){
    var [counter, setCounter]=useState(0);
    var [accountdetail,setAccountDetail]=useState([]);
    debugger;
    // useEffect(()
    useEffect(()=>{
        var dataPromise=axios.get("https://localhost:5001/api/Student/AllStudents");
    dataPromise.then((response)=>{
        debugger;
        setAccountDetail(response.data);
        debugger;
    })
    },[])
    return(
        <div>
            {
                accountdetail.map((employee) => {       
                    return <AccountDetailsComponent key={employee.accountNumber} detail={employee} ></AccountDetailsComponent>
                })
            }
        </div>
    )
}
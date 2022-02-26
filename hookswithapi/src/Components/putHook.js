import { useState, useEffect } from 'react';
import axios from 'axios';
// import GetHook from './AccountApiGetWithHooks';

export default function PutHook(props) {
    debugger;
    var [accountNumber, setNumber] = useState(props.pro ?  props.pro.accountNumber : "");
    var [customerName, setName] = useState(props.pro ? props.pro.customerName : "");
    var [currentAddress, setAddress] = useState(props.pro ? props.pro.currentAddress : "");
    var [currentBalance, setBalance] = useState(props.pro ? props.pro.currentBalance : "");
    
    debugger;
    // var accountNumber = props.pro.accountNumber;
    // var customerName = props.pro.customerName;
    // var currentAddress = props.pro.currentAddress;
    // var currentBalance = props.pro.currentBalance;

    // var [data, setData] = useState([]);

    // useEffect(() => {
    //     setNumber(props.dataSend.accountNumber);
    //     setName(props.dataSend.customerName);
    //     setAddress(props.dataSend.currentAddress);
    //     setBalance(props.dataSend.currentBalance);
    //     debugger;
    // }, [])

    const onNumberChange = e => {
        setNumber(e.target.value);
    };

    debugger;
    
    const onNameChange = e => {
        setName(e.target.value);
    };

    const onAddressChange = e => {
        setAddress(e.target.value);
    };

    const onBalanceChange = e => {
        setBalance(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            accountNumber,
            customerName ,
            currentAddress,
            currentBalance,
    };

        axios
          .put("https://localhost:5001/api/Student/UpdateAccount?id="+accountNumber, data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
          alert("Data Updated");
          debugger;
    };

    return (
        <div className="AccountApiPutWithHooks">
            <form className="AccountApiPutWithHooks" onSubmit={handleSubmit}>
                {/* <label value="Account Number"></label> */}
                <input
                    placeholder={accountNumber} value={accountNumber}
                    onChange={onNumberChange} required />
                <br />

                <input
                    placeholder={customerName} value={customerName}
                    onChange={onNameChange} required />
                <br />

                <input
                    placeholder={currentAddress} value={currentAddress}
                    onChange={onAddressChange} required />
                <br />

                <input
                    placeholder={currentBalance} value={currentBalance}
                    onChange={onBalanceChange} required />
                <br />

                <button type="submit"> Update Student </button>
            </form>
        </div>
    );
}
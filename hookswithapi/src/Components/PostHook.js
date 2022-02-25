import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostHook() {
    var [accountNumber, setNumber] = useState("");
    var [customerName, setName] = useState("");
    var [currentAddress, setAddress] = useState("");
    var [currentBalance, setBalance] = useState("");
    // var [data, setData] = useState([]);

    const onNumberChange = e => {
        setNumber(e.target.value);
    };

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

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

        axios
          .post("https://localhost:5001/api/Student/AddStudent", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
    };

    return (
        <div className="AccountAddComponent">
            <form className="AccountAddComponent" onSubmit={handleSubmit}>
                <input
                    placeholder="Account Number" value={accountNumber}
                    onChange={onNumberChange} required />
                <br />

                <input
                    placeholder="Customer Name" value={customerName}
                    onChange={onNameChange} required />
                <br />

                <input
                    placeholder="Address" value={currentAddress}
                    onChange={onAddressChange} required />
                <br />

                <input
                    placeholder="Balance" value={currentBalance}
                    onChange={onBalanceChange} required />
                <br />

                <button type="submit">Add Student </button>
            </form>
        </div>
    );
}

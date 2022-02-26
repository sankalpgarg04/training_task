import { Component, useState } from "react";
import AccountListComponent from "./AccountListComponent";
import axios from "axios";
import GetAllAccount from '../HooksImplementation/AccountApiGetWithHooks'
import UpdateUserAccount from '../HooksImplementation/AccountApiPutWithHooks'

export default function AccountDetailsComponent(props) {

    var [abcd,setAbcd]= useState("");

    var styleObject = {
        containerStyle: {
            width: "18rem",
            margin: "20px",
            display: "inline-block"
        }
    };

    const DeleteHook = (e) => {
        var id = e.target.id;
        debugger;
        axios.delete("https://localhost:5001/api/Student/DeleteAccountWithoutAlert?id=" + id).then(() => {
            debugger;
            alert("Employee is Deleted");
            abcd = true;
            debugger;
            // AccountDetailsComponent();
            // GetAllAccount();
        })
        debugger;
    }

    const UpdateUser = (e) => {
        debugger;
        // var koiBHiObject = props.detail;
        setAbcd(true);
        debugger;
        
        // return (
        //     <div>
        //         <UpdateUserAccount key={koiBHiObject.accountNumber} detail = {koiBHiObject} > </UpdateUserAccount>
        //     </div>   
        // )
        
        // UpdateUserAccount(koiBHiObject);
        // debugger;


    }

    return (
        <div className="card" style={styleObject.containerStyle}>
            <img height={150} width={300} src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
            <div className="card-body">
                <div>
                    <div>
                        <p className="card-text">{props.detail.accountNumber} <br /> <b>{props.detail.customerName}</b> <br /> {props.detail.currentAddress} <br /> {props.detail.currentBalance}</p>
                    </div>
                    <input type="button" className="btn btn-primary" id={props.detail.accountNumber} value="Delete" onClick={DeleteHook} />
                    <input type="button" className="btn btn-primary" value="Updat3" onClick={UpdateUser} />
                    {/* {abcd === true ? GetAllAccount() : ""} */}
                    {abcd && <UpdateUserAccount pro = {props.detail}></UpdateUserAccount>}
                </div>
            </div>
        </div>
    )
}
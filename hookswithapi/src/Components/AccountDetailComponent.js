import { Component } from "react";
import AccountListComponent from "./AccountListComponent";
import axios from "axios";
import GetAllAccount from '../HooksImplementation/AccountApiGetWithHooks'

export default function AccountDetailsComponent(props) {

    var abcd = false;

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
            // GetAllAccount();
        })
        debugger;
        
    }

    return (
        <div className="card" style={styleObject.containerStyle}>
            <img height={150} width={300} src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
            <div className="card-body">
                <div>
                    <div>
                        <p className="card-text">{props.accountNumber} <br /> <b>{props.customerName}</b> <br /> {props.currentAddress} <br /> {props.currentBalance}</p>
                    </div>
                    <input type="button" className="btn btn-primary" id={props.accountNumber} value="Delete" onClick={DeleteHook} />
                </div>
            </div>
        </div>
    )
}
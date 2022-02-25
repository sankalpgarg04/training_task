import { Component } from "react";
import axios from "axios";

export default function AccountDetailsComponent(props) {
    debugger;
    var styleObject = {
        containerStyle: {
            width: "18rem",
            margin: "20px",
            display: "inline-block"
        }
    };
    var deleteEmployee = (event) => {
        debugger;
        axios.delete("https://5a530e1477e1d20012fa066a.mockapi.io/login/" + event.target.id).then(() => {
            alert("Employee is Deleted");
        })
    }

    return (
        <div className="card" style={styleObject.containerStyle}>
            <img height={150} width={300} src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
            <div className="card-body">
                <div>
                    <div>
                        <p className="card-text">{props.accountNumber} <br /> <b>{props.customerName}</b> <br /> {props.currentAddress} <br /> {props.currentBalance}</p>
                    </div>
                    <input type="button" id={props.id} className="btn btn-primary" value="Delete" onClick={this.deleteEmployee} />                
                </div>
            </div>
        </div>
    )
}
import { useState, useEffect } from 'react';
import axios from 'axios';
import GetHook from './GetHook';

export default function DeleteHook(props) {
    // function deleteEmployee(event) {
        debugger;
        axios.delete("https://localhost:5001/api/Student/DeleteAccount?id=" + props).then(() => {
            alert("Employee is Deleted");
        })
    // }

    return (
        <div>
                {
                    GetHook
                }
            </div>
    )
    debugger;
}
import React from "react";

function EmpTable (props){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>Profile Photo</th>
                    <th scope='col'>Employee Name</th>
                    <th scope='col'>Email Address</th>
                    <th scope='col'>Phone Number</th>
                </tr>
                <tbody>
                    {props.children}
                </tbody>
                
            </thead>
        </table>
    )
};

export default EmpTable; 
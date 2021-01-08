import React from "react";

function TableData(props) {
    return(
        <tr className="table-data">
            <th scope="row">{props.name}</th>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td><img src={props.picture} alt={props.name}></img></td>
        </tr>

    )
};

export default TableData;
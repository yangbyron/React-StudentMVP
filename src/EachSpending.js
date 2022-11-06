import React from "react"
import Delete from "./Delete";

const EachSpending=(props)=>{
    const spending = props.spending;
    return <tr><td>{spending.category}</td><td>{spending.amount}</td><td>{spending.description}</td><td>{spending.date.substring(0,10)}</td><Delete id={spending.id} deleteSpending={props.deleteSpending}/></tr>
}
export default EachSpending
import React from "react"
import EachSpending from "./EachSpending"

const CurrentMonthSpending=(props)=>{
    return(
        <table className="spending-header">
            <tbody>
            <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
            {props.spendings.map(eachSpending =>{
                    return <EachSpending spending={eachSpending} key={eachSpending.id} click={props.click} deleteSpending={props.deleteSpending}/>
            })}
            <tr>
                <td>{'Total Spending:'}</td>
                <td colSpan='75%'>{props.total}</td>
            </tr>
            </tbody>
        </table>
    )
}
export default CurrentMonthSpending
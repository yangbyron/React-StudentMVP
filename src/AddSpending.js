import React, { useState } from "react"

const AddSpending=(props)=>{
    const spendingDetail = {
        category : '',
        description:'',
        amount: 0,
        frequency:'one time',
        date:''
    }
    const [spending,setSpending]=useState(spendingDetail);

    function handleChange(e){
        setSpending({
            ...spending,
            [e.target.name]:e.target.value
        })
    }

    function handleClick(e){
        fetch(props.URL, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(spending)
        })
    }
    return (
        <form>
            <select name="category" required onChange={handleChange}>
                <option value=''>Category</option>
                <option value='monthly bill'>Monthly Bill</option>
                <option value='gas'>Gas</option>
                <option value='grocery'>Grocery</option>
                <option value='food'>Food</option>
                <option value='subscription'>Subscription</option>
                <option value='selfcare'>Self Care</option>
                <option value='pets'>Pets</option>
                <option value='kids'>Kids</option>
                <option value='travel'>Travel</option>
            </select>
            <input name="description" placeholder="Add a description" onChange={handleChange} required/>
            <input name="amount" placeholder="Enter Amount" step='0.01' type='number' onChange={handleChange} required/>
            <select name="frequency" defaultValue={"one time"} onChange={handleChange} required>
                <option value='one time'>One time</option>
                <option value='monthly'>Monthly</option>
            </select>
            <input name="date" type="date" onChange={handleChange} required/>
            <button onClick={handleClick}>Add</button>
        </form>
    )
}
export default AddSpending
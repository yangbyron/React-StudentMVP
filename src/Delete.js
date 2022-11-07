import React, { useState } from "react"

const Delete=(props)=>{
    const [id,setId]=useState(props.id);
    function handleClick(e){
        fetch('http://localhost:3002/api/wallet',{
            method:'DELETE',
            body:JSON.stringify(props),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(setId(-1))
        .then(props.deleteSpending())
    }
    return <td><button id={id} onClick={handleClick}>Delete</button></td>
}
export default Delete
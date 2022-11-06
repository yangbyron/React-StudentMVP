import React from "react"

const Tab=()=>{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('default',{month:'short'});
    return <div className="TabTitle">
        <h1>{year} {month} Spending:</h1>
    </div>
}
export default Tab
import { useEffect, useState } from "react";
import AddSpending from "./AddSpending";
import CurrentMonthSpending from "./CurrentMonthSpending";
import DisplayChart from "./DisplayChart";
import Tab from "./Tab";

function App() {
  const [spendings,setSpendings]=useState([]);
  const [isAddClicked,setIsAddClicked]=useState(false);
  const [sumOfData,setSumOfData]=useState([]);
  const URL = 'http://localhost:3002/api/wallet';
  // const URL = 'http';
  function handleAddClick(){
    setIsAddClicked(!isAddClicked);
  }
  function handleDelete(){
    console.log('delete');
    setSpendings(spendings);
  }
  useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(data=>setSpendings(data))
  },[spendings]);
  useEffect(()=>{
    fetch(URL+'/sum')
    .then(res=>res.json())
    .then(data=>setSumOfData(data))
  },[spendings]);

  if(isAddClicked){
    return <AddSpending URL={URL}/>
  }else{
    return (
      <div className="App">
        <Tab/>
        <CurrentMonthSpending spendings={spendings} deleteSpending={handleDelete}/>
        <button onClick={handleAddClick}>Add Spending</button>
        <DisplayChart sumOfData={sumOfData}/>
      </div>
    );
  }
}

export default App;

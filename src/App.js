import { useEffect, useState } from "react";
import AddSpending from "./AddSpending";
import CurrentMonthSpending from "./CurrentMonthSpending";
import DisplayChart from "./DisplayChart";
import Tab from "./Tab";
import './stylesheet.css';

function App() {
  const [spendings,setSpendings]=useState([]);
  const [oldSpendings,setOldSpendings]=useState([]);  
  const [isAddClicked,setIsAddClicked]=useState(false);
  const [sumOfCategory,setSumOfCategory]=useState([]);
  const [oldSumOfCategory,setOldSumOfCategory]=useState([]);
  const[totalSpending,setTotalSpending]=useState('');
  const[oldTotalSpending,setOldTotalSpending]=useState('');
  const URL = 'http://localhost:3002/api/wallet';
  // const URL = 'http';
  function handleAddClick(){
    setIsAddClicked(!isAddClicked);
  }
  function handleDelete(){
    setOldSpendings(spendings);
    setOldSumOfCategory(sumOfCategory);
    setOldTotalSpending(totalSpending);
  }
  useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(data=>setSpendings(data))
  },[oldSpendings]);
  useEffect(()=>{
    fetch(URL+'/categorysum')
    .then(res=>res.json())
    .then(data=>setSumOfCategory(data))
  },[oldSumOfCategory]);
  useEffect(()=>{
    fetch(URL+'/sum')
    .then(res=>res.json())
    .then(data=>setTotalSpending(data[0].total))
  },[oldTotalSpending]);

  if(isAddClicked){
    return <AddSpending URL={URL}/>
  }else{
    return (
      <div className="App">
        <Tab/>
        <div className="wrapper">
        <CurrentMonthSpending total={totalSpending} spendings={spendings} deleteSpending={handleDelete}/>
        <button className="addButton" onClick={handleAddClick}>Add Spending</button>
        </div>
        <DisplayChart sumOfData={sumOfCategory}/>
      </div>
    );
  }
}

export default App;

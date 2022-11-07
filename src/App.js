import { useEffect, useState } from "react";
import AddSpending from "./AddSpending";
import CurrentMonthSpending from "./CurrentMonthSpending";
import DisplayChart from "./DisplayChart";
import Tab from "./Tab";
import './stylesheet.css';

function App() {
  const [spendings,setSpendings]=useState([]);
  const [isAddClicked,setIsAddClicked]=useState(false);
  const [sumOfCategory,setSumOfCategory]=useState([]);
  const[totalSpending,setTotalSpending]=useState('');
  const [isDeleteClicked,setIsDeleteClicked]=useState(false);
  const URL = 'http://localhost:3002/api/wallet';
  // const URL = 'http';
  function handleAddClick(){
    setIsAddClicked(!isAddClicked);
  }
  function handleDelete(){
    setIsDeleteClicked(!isDeleteClicked);
  }
  useEffect(()=>{
    console.log('render and re render')
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
      setSpendings(data)
      fetch(URL+'/categorysum')
      .then(res=>res.json())
      .then(data=>{
        setSumOfCategory(data);
        fetch(URL+'/sum')
        .then(res=>res.json())
        .then(data=>
          setTotalSpending(data[0].total))
        })
    })
  },[isDeleteClicked]);
  
  if(isAddClicked){
    return <AddSpending URL={URL}/>
  }else{
    return (
      <div className="App">
        <Tab/>
        <div className="wrapper">
        <CurrentMonthSpending total={totalSpending} spendings={spendings} deleteSpending={()=>{handleDelete()}}/>
        <button className="addButton" onClick={handleAddClick}>Add Spending</button>
        </div>
        <DisplayChart sumOfData={sumOfCategory}/>
      </div>
    );
  }
}

export default App;

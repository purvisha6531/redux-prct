import logo from './logo.svg';
import './App.css';

import React,{useEffect,useState} from 'react';
         

function App() {
const[data,setData]=useState([])
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    result.json().then((resp)=>{
        console.warn("result",resp)
        setData(resp)
    })
  })

},[])

  return (
    <div className='App'>
    <h1>API EXAMPLE</h1>
    <table border="4">
      <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>USERNAME</td>
      </tr>
      {
        data.map((item)=>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
        <td>{item.username}</td>
        </tr>
        )
      }
    </table>
    </div>
  );
}

export default App;  

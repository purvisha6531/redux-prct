import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavItem, Table} from 'react-bootstrap';
import Reuse from './Reuse';

function App() {
  const users=[
    {name:'purvi',address:'abc'},
    {name:'prihaan',address:'def'}
  ]
  return (
    <div className="App">
      <h1>Reuse component</h1>
      {
        users.map((item,i)=>
        <Reuse data={item}/>
        )
      }
      
    </div>
  );
}

export default App;



import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import {Table} from 'react-bootstrap';
import Fragmentcomponent from './Fragmentcomponent';


function App() {
  
  return (
    <div className="App">
      <h1>fragment</h1>
      <table>
        <tbody>
          <tr>
            <Fragmentcomponent/>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import {Table} from 'react-bootstrap';
import Child from './Child';


function App() {
  function abc(item)
  {
    alert(item);
    }
  return (
    <div className="App">
      <h1>child to parrent & lifting state</h1>5
      <Child alert={abc}/>
      
    </div>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import {Table} from 'react-bootstrap';



class App extends React.PureComponent {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
  render()
  {
    console.warn("rerender")
    return (
      <div className="App">
        <h1>PURE COmpontent using state{this.state.count}</ h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>

      </div>
    );
  }
  
}

export default App;


import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import {Table} from 'react-bootstrap';
import Purecomp from './Purecomp';



class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
  render()
  {
    return (
      <div className="App">
        <h1>PURE COmpontent using state</ h1>
        <Purecomp count={this.state.count}/>
        <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>

      </div>
    );
  }
  
}

export default App;


import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState,useMemo } from 'react';
import {NavItem, Table} from 'react-bootstrap';
import Purecomp from './Purecomp';



function App (){
  const[count,setCount]=useState(0);
  const[item,setItem]=useState(10);

  const memo=useMemo(function multi()
  {
    console.warn("multi")            
    return count*5
  },[count])
    return (
      <div className="App">
        <h1>Use Memo in HOOK count{count}</ h1>
        <h1>multi item{item}</h1>
        <h2>{memo}</h2>
        <button onClick={()=>setCount(count+1)}> update</button>
        <button onClick={()=>setItem(count*10)}> update</button>
      </div>
    );
 
  
}

export default App;



import logo from './logo.svg';
import './App.css';
import React, { createRef } from 'react';
import {NavItem, Table} from 'react-bootstrap';
import Purecomp from './Purecomp';



class App extends React.Component{
  constructor()
  {
    super();
    this.pref=createRef();

  }
  componentDidMount()
  {
    //console.warn(this.pref.current.value="12")
  }
  getval()
  {
    console.warn(this.pref.current.value)
  }
  render()
  {
    return (
      <div className='App'>
        <h1>Ref </h1>
        <input type="text" ref={this.pref}/>
        <button onClick={()=>this.getval()}>check</button>
      </div>
    );
 
  }
  
    
  
}

export default App;  



import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import {NavItem, Table} from 'react-bootstrap';
import Forwardrefprct from './Forwardrefprct';



function App() {
  let inputRef=useRef(null);
  function updateinput()
  {
    inputRef.current.value="12"
  }

    return (
      <div className='App'>
        <h1> Forward Ref </h1>
        <Forwardrefprct ref={inputRef}/>
        <button onClick={updateinput}>check</button>
      </div>
    );
   
  
  
    
  
}

export default App;  


import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';



function App() {
  let inputRef=useRef(null)
  let inputRef2=useRef(null)
  function submitform(e)
  {
    e.preventDefault()
    console.warn( "input filed 1",inputRef.current.value)

    console.warn( "input filed 1",inputRef2.current.value)
    let ip3=document.getElementById('ip3').value
    console.warn( "input filed 1",ip3)
  }
  
    return (
      <div className='App'>
        <h1>Uncontrolled component</h1>
        <form onSubmit={submitform}>
          <input ref={inputRef} type="text"/><br/><br/>
          <input ref={inputRef2} type="text"/><br/><br/>
          <input id="ip3" type="text"/>
          <button>Submit</button>
        </form>
        
      </div>
    );
   
  
  
    
  
}

export default App;  


import logo from './logo.svg';
import './App.css';
import React, { useRef ,useState} from 'react';



function App() {
  
    return (
      <div className='App'>
        <h1>HIGH ORDER component</h1>
        <Counter/>
        <High cmp={Counter}/>
        </div>
    );
}
function High(props)
{
  return(
    <h2 style={{backgroundColor:'blueviolet'}}><props.cmp/></h2>
  )
}
function Counter()
{
  const[count,setCount]=useState(0)
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>update</button>
    </div>
  )
}

export default App;  



import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router , Link,Route, Routes } from 'react-router-dom'



function App() {

  return (
    <div className='App'>
      <h1>ROUTING SETUP</h1>
      <Router>
      <Link to="/home" >HOME PAGE</Link>
      <Link to="/about" >About PAGE</Link>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      
    
   

      </Router>
     
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>this one home page</p>
    </div>

  )
}

function About() {
  return (
    <div>
      <h1>ABOUT</h1>
      <p>this one About us page</p>
    </div>

  )
}

export default App;  



import logo from './logo.svg';
import './App.css';
import React from 'react';
import {  Link,Route, Routes } from 'react-router-dom'
import Navrouting from './Navrouting'; 
import Homepage from './Homepage';
import Aboutus from './Aboutus';
 

function App() {

  return (
    <div className='App'>
      <h1>ROUTING SETUP</h1>
      <Navrouting/>
      <Routes>
    
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/" exact={true} element={<Homepage/>}/>
      </Routes>
    
     
    </div>
  );
}




export default App;  



import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router , Link,Route, Routes } from 'react-router-dom'



function App() {

  return (
    <div className='App'>
      <h1>404 error page </h1>
      <Router>
      <Link to="/home" >HOME PAGE</Link>
      <Link to="/about" >About PAGE</Link>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/*" element={<Page404/>}/>
      </Routes>
      
    
   

      </Router>
     
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>this one home page</p>
    </div>

  )
}

function About() {
  return (
    <div>
      <h1>ABOUT</h1>
      <p>this one About us page</p>
    </div>

  )
}


function Page404() {
  return (
    <div>
      <h1>PAGE 404 not founde</h1>
      <p>404 Error page</p>
    </div>

  )
}
export default App;  




import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { NavItem } from 'react-bootstrap';
import User from './User';

                                   

function App() {
  let user = [
    { id: 1, name: 'prihaan', email: 'prihaan@gamil.com' },
    { id: 2, name: 'purvisha', email: 'purvisha@gamil.com' },
    { id: 3, name: 'paras', email: 'paras@gamil.com' },
    { id: 4, name: 'neel', email: 'neel@gamil.com' },
    { id: 5, name: 'tyson', email: 'tyson@gamil.com' },
  ]

  return (
    <div className='App'>
      <Router>

        <h1>Dynamic routing</h1>
        {
          user.map((item) =>
            <div><Link to={"/user/" + item.id}><h3>{item.name}</h3></Link></div>)
        }
        
        <Routes>
          <Route path="/user/:id" element={<User/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;  



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

import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import {Table} from 'react-bootstrap';



class Purecomp extends React.PureComponent {
   
  render()
  {
    console.warn("props rerender")
    return (
      <div className="App">
        <h1>Prop pure component{this.props.count} </ h1>
     

      </div> 
    );
  }
  
}

export default Purecomp;

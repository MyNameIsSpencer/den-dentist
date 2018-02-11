import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import Home from './Home.js';
import Procedures from './Procedures.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <div>

        <Home></Home>
        <Procedures></Procedures>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;



{
  // <header className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <h1 className="App-title">Welcome to Rolling Dentall!!</h1>
  // </header>
  // className="App"
}

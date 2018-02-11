import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import Home from './Home.js';
import Procedures from './Procedures.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/procedures" component={Procedures} />
              <Route path="/contact" component={Contact} />
            </div>
        </Router>
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

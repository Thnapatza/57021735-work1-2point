import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
class App extends Component {
  render() {
    return (
		  <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		<div>
	<Calculator />
		
	  </div>
      </div>
		
		  </div>
		
    );
  }
}

export default App;

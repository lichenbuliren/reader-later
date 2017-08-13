import React, { Component } from "react";
import { Button } from "react-bootstrap";
import logo from "./logo.svg";
import "./styles/css/App.css";
import { Clock } from "./components/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock />
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

export default App;

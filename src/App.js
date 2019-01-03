import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

import { toggle } from "./data/actions";

const App = props => {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => props.toggle(props.todos[0])}>Click!</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggle }
)(App);

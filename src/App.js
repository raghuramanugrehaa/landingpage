import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/header";
import {Home } from "./components/home";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
        <p className="App-intro">
        <h2>Welcome to React</h2>

   <header  />

        </p>


      </div>
    );
  }
}

export default App;

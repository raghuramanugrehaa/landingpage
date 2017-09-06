import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/header";
import { Home } from "./components/home";
//import { Data } from "./components/data";
//import home from "./components/home";




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Home/>
       </div>

           );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import main from "./components/main.component";
import view from "./components/view.component";
import gridview from "./components/grid.component";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <Route path="/" exact component ={main}></Route>
      <Route path="/view" exact component ={view}></Route>
      <Route path="/gridview" exact component ={gridview}></Route>

    </Router>
  );
}

export default App;

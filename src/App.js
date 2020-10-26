import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import './App.css';
import Navigation from "./components/Navigation/Navigation";

function App() {

  const navigationRows = [
    {label: 'Test1', url: 'Url1'},
    {label: 'Test2', url: 'Url2'},
    {label: 'Test3', url: 'Url3'},
    {label: 'Test4', url: 'Url4'},
    {label: 'Test5', url: 'Url5'}
  ];

  return (
    <div className="App">
      <Router>
        <Navigation rows={navigationRows}/>
      </Router>
    </div>
  );
}

export default App;

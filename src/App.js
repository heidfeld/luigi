import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import './App.css';
import Navigation from "./components/Navigation/Navigation";

function App() {

  const navigationRows = [
    {label: 'Coś', url: 'Url1'},
    {label: 'Albo', url: 'Url2'},
    {label: 'Ktoś', url: 'Url3'},
    {label: 'Nie', url: 'Url4'},
    {label: 'Wiem', url: 'Url5'}
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

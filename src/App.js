import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router, Link
} from "react-router-dom";

import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Marwin from "./routes/Marwin/Marwin";
import Football from "./routes/Ekstraklasa/Football";

function App() {

    const HOME_PATH = '/';
    const MARWIN_PATH = '/marwin';
    const EKSTRAKLASA_PATH = '/ekstraklasa';

    const navigationRows = [
        {label: 'Home', url: HOME_PATH},
        {label: 'Marwin', url: MARWIN_PATH},
        {label: 'Ekstraklasa', url: EKSTRAKLASA_PATH},
        {label: 'Nie', url: 'Url4'},
        {label: 'Wiem', url: 'Url5'}
    ];

    return (
        <div className="App">
            <Router>
                <Navigation rows={navigationRows}/>
                <hr/>
                <Switch>
                    <Route path={EKSTRAKLASA_PATH}>
                        <Football/>
                    </Route>
                    <Route path={MARWIN_PATH}>
                        <Marwin/>
                    </Route>
                    <Route path={HOME_PATH}>
                        Elo to stronka domowa.
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

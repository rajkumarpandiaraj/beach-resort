import React from 'react';
import './App.css';
// import {data} from './data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homes from "./components/Homes";
import Rooms from "./components/Rooms";
import Singleroom from "./components/Singleroom";
import Error from "./components/Error";
import Nav from "./components/Nav";

function App() {
    return(
    <Router>
        <div className="App">
        <Nav/>
        <Switch>
            <Route exact path="/" component={Homes} />
            <Route exact path="/rooms" component={Rooms} />
            <Route component={Error} />
            <Route path="/:slug" component={Singleroom} />
        </Switch>
        </div>
    </Router>
    )

}

export default App;

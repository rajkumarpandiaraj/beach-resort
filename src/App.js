import React from 'react';
import './App.css';
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
import Globalcontext from './context/Globalcontext'

function App() {
    return(
    <Router>
        <Globalcontext>
            <div className="App">
            <Nav/>
            <Switch>
                <Route exact path="/" component={Homes} />
                <Route exact path="/rooms" component={Rooms} />
                <Route path="/rooms/:slug" component={Singleroom} />
                <Route component={Error} />
            </Switch>
            </div>
        </Globalcontext>
    </Router>
    )

}

export default App;

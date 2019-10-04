import React from "react";
import Routes from './Routes';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => (
    <Router>
        <Routes />
    </Router>
);

export default App;
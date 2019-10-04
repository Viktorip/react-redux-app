import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import App from './App.jsx';

const Routes = () => (
        <Switch>
            <Route path="/" component={App} />
        </Switch>
);

export default Routes;
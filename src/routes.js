import React from 'react';
import { Switch, Route } from 'react-router'
/**
 * Import all page components here
 */
import App from './App';
import About from './about/about';
import Contact from './contact/Contact';
import Login from './login/Login';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/:login" component={Login} />
    </Switch>
);
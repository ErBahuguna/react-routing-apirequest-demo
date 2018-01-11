import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import './main.css';

import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Login from '../login/login';
import User from '../users/user';

export default class Main extends Component {
    render() {
        return (
            <div>
                Main Page<br />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/user" component={User} />
                    <Route path="/:login" component={Login} />
                </Switch>
                </div>
        )
    }
}

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Form from './components/Form';

export default (
    <Switch>
        <Route component={Auth} exact path='/'/>
        <Route component={Dashboard} path='/dashboard'/>
        <Route component={Form} path='/form'/>
    </Switch>
)
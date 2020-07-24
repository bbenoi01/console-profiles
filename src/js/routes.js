import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './containers/Main';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main}/>
            </Switch>
        );
    }
}
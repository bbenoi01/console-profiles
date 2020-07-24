import React, { Component } from 'react';
import PSLogin from './components/PSLogin';
import PSN from './components/PSN';

export default class ComponentName extends Component {
    render() {
        const authenticated = true;

        if(authenticated === false) {
            return (
                <div id='playstation'>
                    <PSN />
                </div>
            )
        } else {
            return (
                <div id='playstation'>
                    <PSLogin />
                </div>
            );
        }
    }
}
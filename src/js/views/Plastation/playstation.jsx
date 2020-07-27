import React, { Component } from 'react';
import PSLogin from './components/PSLogin';
import PSN from './components/PSN';

export default class ComponentName extends Component {
    render() {
        const authenticated = false;

        if(authenticated === true) {
            return (
                <PSN />
            )
        } else {
            return (
                <PSLogin />
            );
        }
    }
}
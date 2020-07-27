import React, { Component } from 'react';
import XboxLogin from './components/Xbox Login';
import XboxLive from './components/Xbox Live';

export default class Xbox extends Component {
    render() {
        const { authenticated } = this.props;

        if(authenticated === true) {
            return (
                <XboxLive />
            );
        } else {
            return (
                <XboxLogin />
            )
        }
    }
}
import React, { Component } from 'react';
import XboxLogin from './components/Xbox Login';
import XboxLive from './components/Xbox Live';

export default class Xbox extends Component {
    render() {
        const authenticated = true;

        if(authenticated === true) {
            return (
                <div id='xbox'>
                    <XboxLive />
                </div>
            );
        } else {
            return (
                <div id='xbox'>
                    <XboxLogin />
                </div>
            )
        }
    }
}
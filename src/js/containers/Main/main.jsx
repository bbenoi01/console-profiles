import React, { Component } from 'react';

import Playstation from '../../views/Plastation';
import Xbox from '../../views/Xbox';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Playstation />
                <hr style={{ margin: '0'}}/>
                <Xbox/>
            </div>
        );
    }
}
import React, { Component, Fragment } from 'react';

import Playstation from '../../views/Plastation';
import Xbox from '../../views/Xbox';

export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <section className="valign-wrapper playstation">
                    <div className="container">
                        <div className="row">
                            <Playstation/>
                        </div>
                    </div>
                </section>
                <div className="divider"></div>
                <section className="valign-wrapper xbox">
                    <div className="container">
                        <div className="row">
                            <Xbox/>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}
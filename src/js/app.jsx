import React, { Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import '../css/style.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Routes/>
            </Router>
            // <div className='app'>
            //     <section className="valign-wrapper" id='playstation'>
            //         <div className="container">
            //             <div className="row">
            //                 <Playstation/>
            //             </div>
            //         </div>
            //     </section>
            //     <hr style={{ margin: '0' }}/>
            //     <section className="valign-wrapper" id='xbox'>
            //         <div className="container">
            //             <div className="row">
            //                 <Xbox />
            //             </div>
            //         </div>
            //     </section>
            // </div>
        );
    }
}
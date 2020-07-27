import React, { Component } from 'react';

import {
    setAuthenticated,
    xbProfile
} from '../../actions';
export default class XboxLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            xblemail: '',
            xblpassword: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const { dispatch } = this.props;
        let authenticated;
        if(this.state.xblemail !== '' && this.state.xblpassword !== '') {
            authenticated = true;
        }
        if(authenticated === true) {
            dispatch(setAuthenticated(authenticated));
            dispatch(xbProfile());
        }
        this.setState({
            xblemail: '',
            xblpassword: ''
        })
    }

    render() {
        return (
            <div
                className="col s4 offset-s4"
            >
                <div
                    className="card xb"
                >
                    <form
                        onSubmit={this.handleClick}
                    >
                        <div
                            className="card-content white-text"
                        >
                            <span
                                className="card-title center"
                            >
                                <b>Xbox</b>
                            </span>
                            <div
                                className="input-field"
                            >
                                <input
                                    type="email"
                                    id='xblemail'
                                    name='xblemail'
                                    className="validate"
                                    style={{ borderColor: 'black' }}
                                    onChange={this.handleChange}
                                />
                                <label
                                    htmlFor="xblemail" 
                                    className="black-text"
                                >
                                    email
                                </label>
                            </div>
                            <div
                                className="input-field"
                            >
                                <input
                                    type="password"
                                    id='xblpassword'
                                    name='xblpassword'
                                    className="validate"
                                    style={{ borderColor: 'black' }}
                                    onChange={this.handleChange}
                                />
                                <label
                                    htmlFor="xblpassword"
                                    className="black-text"
                                >
                                    password
                                </label>
                            </div>
                        </div>
                        <div
                            className="card-action center"
                        >
                            <button
                                className="btn green waves-effect waves-light"
                                type='submit'
                            >
                                Submit
                                <i
                                    className="material-icons right"
                                >
                                    send
                                </i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
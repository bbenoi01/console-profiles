import React, { Component } from 'react';

export default class PSLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            psnemail: '',
            psnpassword: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        // const { dispatch } = this.props;
        this.setState({
            psnemail: '',
            psnpassword: ''
        })
    }

    render() {
        return (
            <div
                className="col s4 offset-s4"
            >
                <div
                    className="card ps"
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
                                <b>Playstation</b>
                            </span>
                            <div
                                className="input-field"
                            >
                                <input
                                    type="email"
                                    id='psnemail'
                                    name='psnemail'
                                    className="validate"
                                    style={{ borderColor: 'black' }}
                                    onChange={this.handleChange}
                                />
                                <label
                                    htmlFor="psnemail"
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
                                    id='psnpassword'
                                    name='psnpassword'
                                    className="validate"
                                    style={{ borderColor: 'black' }}
                                    onChange={this.handleChange}
                                />
                                <label
                                    htmlFor="psnpassword"
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
                                className="btn blue waves-effect waves-light"
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
import React, { Component } from 'react';

export default class PSLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            psemail: '',
            pspassword: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        const { dispatch } = this.props;
        this.setState({
            psemail: '',
            pspassword: ''
        })
    }

    render() {
        return (
            <div className="col s4 offset-s4">
                <div className="card ps">
                    <form onSubmit={this.handleClick}>
                        <div className="card-content white-text">
                            <span className="card-title center">
                                <b>Playstation</b>
                            </span>
                            <div className="input-field">
                                <input type="email" id='psemail' name='psemail' className="validate" style={{ borderColor: 'black' }} onChange={this.handleChange} />
                                <label htmlFor="psemail" className="black-text">email</label>
                            </div>
                            <div className="input-field">
                                <input type="password" id='pspassword' name='pspassword' className="validate" style={{ borderColor: 'black' }} onchange={this.handleChange}/>
                                <label htmlFor="pspassword" className="black-text">password</label>
                            </div>
                        </div>
                        <div className="card-action center">
                            <button className="btn blue waves-effect waves-light" type='submit'>
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
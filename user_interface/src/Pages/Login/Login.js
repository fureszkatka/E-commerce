import React, { Component } from 'react'
import { withLoginContext } from '../../core/LoginContext';
import { withThemeContext } from '../../core/ThemeContext';
import { Navigate } from 'react-router';

export class Login extends Component {

    state = {
        email: "kati@gmail.com",
        password: "kiki12",
        message: ""
    }
    

    login = async() =>{
        const {email,password} = this.state

        const message = await this.props.auth.login(email,password)
        this.setState({
            message: message
        })
    }
    

    handleChange = (value) => (e) =>{
        this.setState({
            [value]: e.target.value
        })
    }

    render() {
        const {email, password} = this.state
        return (
            <div className='Login_container'>
                {this.props.auth.isLoggedIn && <Navigate to="/"/>}
                <div className='Login_inputs-container'>
                    <input value = {email} onChange={ this.handleChange("email") }/>
                    <input value = {password} onChange={ this.handleChange("password") }/>
                </div>
                <div className="Login_button-container">
                    <button onClick={this.login} className='Login_button'>Login</button>
                </div>
            </div>
        )
    }
}

export default withLoginContext(withThemeContext(Login));
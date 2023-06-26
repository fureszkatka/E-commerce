import React, { Component } from 'react'
import { withLoginContext } from '../../core/LoginContext';
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import { Navigate } from 'react-router';
import {compose} from "recompose"


export class Login extends Component {

    state = {
        email: "kati@gmail.com",
        password: "kiki12",
        message: ""
    }
    

    login = async() =>{
        const {email,password} = this.state

        await this.props.auth.login(email,password)
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
                {this.props.auth.isLoggedIn && <Navigate to={`/${this.props.auth.user.id}`}/>}
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

export default compose(
    withLoginContext,
    withThemeContext,
    withCartContext
)(Login)
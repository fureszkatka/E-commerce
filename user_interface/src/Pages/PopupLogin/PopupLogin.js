import React, { Component } from 'react'
import { withLoginContext } from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext'
import {Navigate} from "react-router"
import "./PopupLogin.styl"

export class PopupLogin extends Component {

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
            <div className='PopupLogin_container'>
                <div className='PopupLogin_background'>
                    {this.props.auth.isLoggedIn && <Navigate to="/"/>}
                    <div className='PopupLogin_inputs-container'>
                        <input className='PopupLogin_email' value = {email} onChange={ this.handleChange("email") }/>
                        <input className='PopupLogin_password' value = {password} onChange={ this.handleChange("password") }/>
                    </div>
                    <div className="PopupLogin_button-container">
                        <button 
                            onClick={this.Popuplogin} 
                            className='PopupLogin_button'>Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withLoginContext(withThemeContext(PopupLogin))
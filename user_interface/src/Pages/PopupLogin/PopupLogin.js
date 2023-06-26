import React, { Component } from 'react'
import { withLoginContext } from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext'
import { withCartContext } from '../../core/CartContext'
import { Navigate, Link } from "react-router-dom"
import "./PopupLogin.styl"
import {compose} from "recompose"


class PopupLogin extends Component {

    state = {
        email: "kati@gmail.com",
        password: "kiki12",
        message: "",
    }
    

    Popuplogin = async() =>{
        console.log(this.props)
        await this.props.auth.login(this.state.email,this.state.password)
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
                <div className='PopupLogin_close'>
                    <div onClick={()=>this.props.auth.closePopup()} className='PopupLogin_close-button'>x</div>
                </div>
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
                <p className='PopupLogin_signup'>If you don't have an account please make one here for shopping 
                    <Link className='PopupLogin' to ="/signup"> Signup
                    </Link>
                </p>
                
            </div>
        )
    }
}

export default compose(
    withLoginContext,
    withThemeContext,
    withCartContext
)(PopupLogin)
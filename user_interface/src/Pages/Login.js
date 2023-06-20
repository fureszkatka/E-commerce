import React, { Component } from 'react'
import { withLoginContext } from '../core/LoginContext';
import axios from "axios"
import { Navigate } from 'react-router';

export class Login extends Component {

    state = {
        email: "",
        password: "",
        message: ""
    }

    login = async() =>{

        const {email, password} = this.state

        const resp =  await axios.post('/api/login', {email,password})
        if(resp.error){
            this.setState({
                message: resp.error
            })
        }
        if(resp.message){
            this.setState({
                message: resp.message
            })
            this.props.auth.login
        }
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

export default withLoginContext(Login);
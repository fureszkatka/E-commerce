import React, { Component } from 'react'
import {withLoginContext} from './LoginContext'

class Menu extends Component {

    changelogin=()=>{
        this.props.login.login("kati@gmail.com", "kiki12")
    }

    changelogout=()=>{
        this.props.login.logout()
    }

    changesignup=()=>{
        this.props.login.signup()
    }

    render() {
        return (
            <div>
                <button>Dark mode</button>
                {
                    this.props.login.isLoggedIn ? 
                        <button onClick={this.changelogout}>Signout</button>
                        : 
                        <>
                        <button onClick={this.changesignup}>Signup</button>
                        <button onClick={this.changelogin}>Signin</button>
                        </>
                }
                    
            </div>
        )
    }
}


export default withLoginContext(Menu)
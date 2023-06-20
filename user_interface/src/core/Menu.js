import React, { Component } from 'react'
import {withLoginContext} from './LoginContext'
import {Link } from "react-router-dom"

class Menu extends Component {

    changelogin=()=>{
        this.props.login.login("kati@gmail.com", "kiki12")
    }

    changelogout=()=>{
        this.props.login.logout()
    }

    render() {
        return (
            <div className='Menu_container'>
                <button className='Menu_theme'>Dark mode</button>
                {
                    this.props.login.isLoggedIn ? 
                        <button className='Menu_signout' onClick={this.changelogout}>Signout</button>
                    : 
                    <>
                        <Link to ="/signup">Signup</Link>
                        <Link onClick={this.changelogin}>Signin</Link>
                    </>
                }
                    
            </div>
        )
    }
}


export default withLoginContext(Menu)
import React, { Component } from 'react'
import {withLoginContext} from '../LoginContext'
import {Link } from "react-router-dom"
import jscookie from "js-cookie"


class Menu extends Component {

    signout=()=>{
        jscookie.remove("kate-style-token")
        this.props.auth.logout()
    }

    render() {
        return (
            <div className='Menu_container'>
                <button className='Menu_theme'>Dark mode</button>
                {
                    this.props.auth.isLoggedIn ? 
                        <button className='Menu_signout' onClick={this.signout}>Signout</button>
                    : 
                    <>
                        <Link to ="/signup">Signup</Link>
                        <Link to ="/login">Login</Link>
                    </>
                }
                    
            </div>
        )
    }
}


export default withLoginContext(Menu)
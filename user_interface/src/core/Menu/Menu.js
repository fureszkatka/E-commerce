import React, { Component } from 'react'
import {withLoginContext} from '../LoginContext'
import { withThemeContext } from '../ThemeContext'
import {Link } from "react-router-dom"
import jscookie from "js-cookie"
import "./Menu.styl"


class Menu extends Component {

    state={
        color: {display: "flex"}
    }

    signout=()=>{
        
        this.props.auth.logout()
    }

    setTheme = () =>{
        this.props.theme.setDark()
    }

    componentDidMount=()=>{
        if(this.props.theme.isDark){
            this.setState({
                color: this.props.color.dark
            })
        }
    }

    render() {
        return (
            <div style={this.state.color} className='Menu_container'>
                <button>Kate style</button>

                <button onClick={this.setTheme} className='Menu_theme'>Dark mode</button>
                <div className='Menu_options-container'>
                    {
                        this.props.auth.isLoggedIn ? 
                            <button className='Menu_signout-button' onClick={this.signout}>Signout</button>
                        : 
                        <>
                            <Link className='Menu_signup-link' to ="/signup">Signup</Link>
                            <Link className='Menu_login-link' to ="/login">Login</Link>
                        </>
                    }
                </div>
            </div>
        )
    }
}


export default withLoginContext(withThemeContext(Menu))
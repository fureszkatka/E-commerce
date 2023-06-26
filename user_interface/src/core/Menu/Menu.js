import React, { Component } from 'react'
import {withLoginContext} from '../LoginContext'
import { withThemeContext } from '../ThemeContext'
import {Link } from "react-router-dom"
import "./Menu.styl"
import {compose} from "recompose"

class Menu extends Component {

    state={
        color: {display: "flex"},
        search: ""
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

    change=(e) =>{
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <div style={this.state.color} className='Menu_container'>
                <div className='Menu'>
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
                <div className='Menu_headline'>
                    <Link className='Menu_kate_style' to = "/">Kate style</Link>
                    <input  className ="Menu_searchbar"value = {this.state.search} onChange={(e)=>this.change(e)}/>
                    <button className='Menu_search-button'>search</button>
                    <div className='Menu_cart'>Cart</div>
                </div>
            </div>
        )
    }
}

export default compose(
    withLoginContext,
    withThemeContext
)(Menu)

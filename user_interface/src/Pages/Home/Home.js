import React, { Component } from 'react';
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import axios from 'axios';
import "./Home.styl"
import PopupLogin from '../PopupLogin/PopupLogin';
import {compose} from "recompose"
import { Link, Navigate } from 'react-router-dom';




class Home extends Component {

    state = {
        items: [],
        cart: [],
    }

    componentDidMount = async() =>{
        const items = await axios.get("/api/getitems")
        
        this.setState({
            items: [...items.data.items]
        })
    }


    render() {
        return (
            <div className='Home_container'>
                {this.props.auth.isLoggedIn && <Navigate to ={`/${this.props.auth.user.id}`}></Navigate>}
                {this.props.cart.isShown && <PopupLogin></PopupLogin>}
                <div className='Home_items'>
                    <>
                    {
                        this.state.items.map((item,index)=> 
                            <div className='Home_item' key={index}>
                                <img className='Home_image' src='https://st4.depositphotos.com/14009552/38450/v/450/depositphotos_384500344-stock-illustration-shopping-cart-logo-design-letter.jpg'></img>
                                <div className='Home_item-info'>    
                                    <Link to={`/logout/${item.id}`} className='Home_name'>{item.name}</Link >
                                    <div className='Home_price'>{item.price}/{item.quantity}db</div>
                                </div>
                            </div>
                        )
                    }
                    </>
                </div>
            </div>
        );
    }
}

export default compose(
    withLoginContext,
    withThemeContext,
    withCartContext
)(Home)
import React, { Component } from 'react';
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import axios from 'axios';
import "./UserHome.styl"
import {compose} from "recompose"
import { Link, Navigate } from 'react-router-dom';




export class UserHome extends Component {

    state = {
        items: [],
        cart: [],
    }

    componentDidMount = async() =>{
        const items = await axios.get("/api/getitems")
        console.log(items)
        this.setState({
            items: [...items.data.items]
        })
    }


    render() {
        return (
            <div className='UserHome_container'>
                {!this.props.auth.isLoggedIn && <Navigate to ="/"></Navigate>}
                <div className='UserHome_items'>
                    <>
                    {
                        this.state.items.map((item,index)=> 
                            <div className='UserHome_item' key={index}>
                                <img className='UserHome_image' src='https://st4.depositphotos.com/14009552/38450/v/450/depositphotos_384500344-stock-illustration-shopping-cart-logo-design-letter.jpg'></img>
                                <div className='UserHome_item-info'>    
                                    <Link to={`/${this.props.auth.user.id}/${item.id}`} className='UserHome_name'>{item.name}</Link >
                                    <div className='UserHome_price'>{item.price}/{item.quantity}db</div>
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
)(UserHome)
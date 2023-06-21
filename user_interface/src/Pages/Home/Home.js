import React, { Component } from 'react';
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import axios from 'axios';
import "./Home.styl"
import PopupLogin from '../PopupLogin/PopupLogin';


class Home extends Component {

    state = {
        items: [],
        quantity: 0,
        cart: [],
    }

    componentDidMount = async() =>{
        const items = await axios.get("/api/getitems")
       
        this.setState({
            items: [...items.data.items]
        })
    }

    decreseItem = (i) =>{
        if(this.props.auth.isLoggedIn){
            if(this.state.quantity < 0){
                this.setState({
                    quantity: this.state.quantity - 1
                })
            }
        }
    }
    
    increase = (i) =>{

        if(this.props.auth.isLoggedIn){
            this.setState({
                quantity: this.state.quantity + 1
            })
        }
    }

    render() {
        return (
            <div className='Home_container'>
                {this.props.auth.isLoggedIn && <PopupLogin></PopupLogin>}
                <div className='Home_items'>
                    <>
                    {
                        this.state.items.map((item,index)=> 
                            <div className='Home_item' key={index}>
                                <img className='Home_image' src='https://st4.depositphotos.com/14009552/38450/v/450/depositphotos_384500344-stock-illustration-shopping-cart-logo-design-letter.jpg'></img>
                                <div className='Home_item-info'>    
                                    <div className='Home_name'>{item.name}</div>
                                    <div className='Home_price'>{item.price}</div>
                                </div>
                                <div className='Home_quantity-container'>
                                    <button 
                                        min = "0"
                                        className='Home_minus' 
                                        onClick={this.decreseItem}>-
                                    </button>
                                    <div className='Home_quantity'>
                                        {this.state.quantity}
                                    </div>
                                    <button 
                                        max = "500"
                                        onClick={this.increase}
                                        className='Home_plus'>+
                                    </button>
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

export default withLoginContext(withThemeContext(Home));
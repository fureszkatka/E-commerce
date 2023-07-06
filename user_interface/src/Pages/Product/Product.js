import React, { Component } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import PopupLogin from '../PopupLogin/PopupLogin'
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Product.styl"


export class Product extends Component {
  
    state={
        quantity: 0,
    }

    componentDidMount=async()=>{
       let item = await this.props.cart.getItem(this.props.params.item)
    }

    increaseItem = () =>{
        this.props.auth.openPopup()
    }
    
    decreaseItem=() =>{
        this.props.auth.openPopup()
    }

    addToCart = () =>{
        this.props.auth.openPopup()
    }

  
    render() {
        return (
            <div className='Product_container'>
                {this.props.auth.isShown && <PopupLogin></PopupLogin>}
                {this.props.auth.isLoggedIn && <Navigate to ="/"></Navigate>}
                <div className='Product_background'>
                    <div className='Product_item'>
                        <div className='Product_name-image'>
                            <img className='Product_image' src='https://st4.depositphotos.com/14009552/38450/v/450/depositphotos_384500344-stock-illustration-shopping-cart-logo-design-letter.jpg'></img>
                            
                        </div>
                        <div className='Product_price-quan'>
                            <p className='Product_price'>{this.props.cart.item.price}/</p>
                            <p className='Product_quan'>{this.props.cart.item.quantity}db</p>
                        </div>
                        <div className='Product_buttons'>
                            <button 
                                onClick={this.decreaseItem}
                                className='Product_minus'
                            >-
                            </button>
                            <div 
                                className='Product_quantity'>
                                {this.state.quantity}
                            </div>
                            <button 
                                onClick={this.increaseItem}
                                className='Product_plus'>+
                            </button>
                            <button 
                                onClick={this.addToCart}
                                className='Product_add'>Add To Cart
                            </button>
                        </div>
                        <div>{this.props.cart.message}</div>
                    </div>
                    <div className='Product_rightside'>
                        <p className='Product_name'>{this.props.cart.item.name}</p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque ac tellus ac neque eleifend tristique.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Sed non quam sit amet odio vulputate aliquet.
                        Mauris venenatis, ligula id gravida lacinia, arcu sem convallis tortor, ut eleifend justo quam eu leo.
                        Donec nec ligula at metus pulvinar rhoncus.
                        Curabitur bibendum augue vitae sem lacinia, id tempus urna tristique.
                        Vivamus ac diam non lectus volutpat facilisis ac id velit.
                        Maecenas commodo nunc sed diam dignissim, eget fringilla odio efficitur.
                        Fusce dignissim nunc sed nisi vulputate, vel molestie leo commodo.
                        Nullam lacinia ante sit amet dolor vulputate, sed aliquet sem egestas.
                        Integer eu elit in enim mollis consectetur.
                        Praesent luctus semper sem, at posuere massa consequat vel.
                        Nam sit amet sem aliquet, gravida elit at, scelerisque dui.
                        Etiam eu neque efficitur, bibendum leo eget, fermentum dui.
                        Suspendisse potenti. Aliquam erat volutpat.
                        
                    </div>
                </div>
            </div>
        )
    }
}

const ProductwitParams = (props) =>{
    const params = useParams()
    return <Product params ={params} {...props}/>    
}

export default compose(
    withLoginContext,
    withThemeContext,
    withCartContext,
)(ProductwitParams)


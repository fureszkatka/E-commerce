import React, { Component } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import { Navigate, useParams } from 'react-router-dom';
import "./UserProduct.styl"



export class UserProduct extends Component {
  
    state={
        quantity: 0,
        item: ""
    }


    decreaseItem = () =>{
        if(this.props.auth.isLoggedIn && this.state.quantity > 0){
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }
    
    increaseItem = () =>{

        if(this.props.auth.isLoggedIn){
            this.setState({
                quantity: this.state.quantity + 1
            })
        }
    }

    addToCart = async(itemname) =>{

        let cart = await this.props.cart.addToCart(this.props.params.product, this.props.params.user, this.state.quantity,itemname)
    }

    componentDidMount = async() =>{
        
        this.props.cart.getItem(this.props.params.product)
    }
  
    render() {
        return (
            <div className='UserProduct_container'>
                {!this.props.auth.isLoggedIn && <Navigate to ={"/"}></Navigate>}
               <div className='UserProduct_background'>
                <div className='UserProduct_item'>
                        <div className='UserProduct_name-image'>
                            <img className='UserProduct_image' src='https://st4.depositphotos.com/14009552/38450/v/450/depositphotos_384500344-stock-illustration-shopping-cart-logo-design-letter.jpg'></img>
                            
                        </div>
                        <div className='UserProduct_price-quan'>
                            <p className='UserProduct_price'>{this.props.cart.item.price}/</p>
                            <p className='UserProduct_quan'>{this.props.cart.item.quantity}db</p>
                        </div>
                        <div className='UserProduct_buttons'>
                            <button 
                                onClick={this.decreaseItem}
                                className='UserProduct_minus'
                            >-
                            </button>
                            <div 
                                className='UserProduct_quantity'>
                                {this.state.quantity}
                            </div>
                            <button 
                                onClick={this.increaseItem}
                                className='UserProduct_plus'>+
                            </button>
                            <button 
                                onClick={()=>this.addToCart(this.props.cart.item.name)}
                                className='UserProduct_add'>Add To Cart
                            </button>
                        </div>
                        <div>{this.props.cart.message}</div>
                    </div>
                    <div className='UserProduct_rightside'>
                        <p className='UserProduct_name'>{this.props.cart.item.name}</p>
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

const UserProductwitParams = (props) =>{
    const params = useParams()
    return <UserProduct params ={params} {...props}/>    
}

export default compose(
    withLoginContext,
    withThemeContext,
    withCartContext,
)(UserProductwitParams)


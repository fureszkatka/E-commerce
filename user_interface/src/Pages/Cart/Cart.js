import React, { Component } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import { Navigate, useParams } from 'react-router-dom';

class Cart extends Component {

    state={
        cart: []
    }

    componentDidMount = async () => {
        let cart = await this.props.cart.getCart(this.props.params.user)
    }

    render() {
        return (
            <div className='Cart_container'>
                {!this.props.auth.isLoggedIn && <Navigate to ={"/login"}></Navigate>}
                {this.props.cart.cart.map((item,index) => 
                    <div className='Cart_cart-modules' key = {index}>
                        <div className='Cart_desc'>
                            <div>{item.name}</div>
                            <div>{item.id}</div>
                        </div>
                        <div>{item.quantity}</div>
                    </div>
                )}
            </div>
        )
    }
}

const UserProductwitParams = (props) =>{
    const params = useParams()
    return <Cart params ={params} {...props}/>    
}

export default compose(
    withLoginContext,
    withThemeContext,
    withCartContext,
)(UserProductwitParams)

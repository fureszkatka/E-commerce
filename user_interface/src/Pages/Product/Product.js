import React, { Component } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import PopupLogin from '../PopupLogin/PopupLogin'
import { Navigate, useParams } from 'react-router-dom';



export class Product extends Component {
  
    state={
        quantity: 0
    }

    decreseItem = () =>{
        this.props.auth.openPopup()
    }
    
    increase=() =>{
        this.props.auth.openPopup()
    }

    addToCart = (i) =>{
        this.props.auth.openPopup()
    }

  
    render() {
        return (
            <div className='Home_quantity-container'>
                {this.props.auth.isLoggedIn && <Navigate to={`/${this.props.auth.user.id}/${this.props.params.item}`}></Navigate>}
                {this.props.auth.isShown && <PopupLogin></PopupLogin>}
                <button 
                    className='Home_minus' 
                    onClick={this.decreseItem}
                >-
                </button>
                <div className='Home_quantity'>
                    {this.state.quantity}
                </div>
                <button 
                    className='Home_plus'
                    onClick={this.increase}
                >+
                </button>
            </div>
        )
    }
}

const UserProductwitParams = (props) =>{
    const params = useParams()
    return <Product params ={params} {...props}/>    
}

export default compose(
    withLoginContext,
    withThemeContext,
    withCartContext,
)(UserProductwitParams)


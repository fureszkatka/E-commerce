import React, { Component } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import { Navigate, useParams } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <div>Cart</div>
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

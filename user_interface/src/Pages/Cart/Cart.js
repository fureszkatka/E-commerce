import React, { Component, useState } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import { Navigate, useParams } from 'react-router-dom';
import "./Cart.styl"
import { Checkbox, Col, Row } from 'antd';


class Cart extends Component {

    state={
        cart: [],
        checked: []
    }


    
    componentDidMount = async () => {
        let cart = await this.props.cart.getCart(this.props.params.user,this.state.checked)
    }

    onChange = (checkedValues) => {
        console.log(checkedValues.target.value);
        this.state({
            checked: [...this.state.checked, checkedValues.target.value]
        })
    };


    render() {
        return (
            <>
                {!this.props.auth.isLoggedIn && <Navigate to ={"/login"}></Navigate>}
                {this.props.cart.cart.map((item,index) => 
                    <div className='Cart_container' key = {index}>
                        <div className='Cart_desc'>
                            <div>{item.name}</div>
                            <div>{item.id}</div>
                        </div>
                        <div>{item.quantity}</div>

                        <span className="material-symbols-outlined">
                            delete
                        </span>
                        <Checkbox onChange={this.onChange} value={item.id}>{item.id}</Checkbox>
                    </div>
                )}
            </>
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

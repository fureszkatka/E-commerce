import React, { Component, useState } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import { Navigate, useParams } from 'react-router-dom';
import "./Cart.styl"
import { Checkbox, Col, Row } from 'antd';
import { withOrderContext } from '../../core/OrderContext';


class Cart extends Component {

    state={
        cart: [],
        checked: []
    }


    
    componentDidMount = async () => {
        let cart = await this.props.cart.getCart(this.props.params.user,this.state.checked)
    }

    onChange = async(checkedValues) => {
        this.setState({
            checked:  [...this.state.checked,checkedValues.target.value]
        })
    };

    addOrder = async() =>{
        let order = await this.props.order.addOrder(this.props.params.user, this.state.checked)
    }

    deleteCartitem = async(id) =>{
        let delorder= await this.props.cart.deleteItem(this.props.params.user, id)
    }

    deleteConfirmed = (id) =>{
        let answer = window.confirm("Are you suuuuuuuuure?")
    
        if(answer){
            this.deleteCartitem(id)
        }
    }

    render() {
        return (
            <div className='Cart_content'>
                <div className='Cart_background'>
                {this.props.order.uploaded && <Navigate to ={`/${this.props.params.user}/order`}></Navigate>}
                {!this.props.auth.isLoggedIn && <Navigate to ={"/login"}></Navigate>}
                {this.props.cart.cart.map((item,index) => 
                    <div className='Cart_container' key = {index}>
                        
                        <div className='Cart_desc'>
                            <div className='Cart_name'>{item.name}</div>
                        </div>
                        <div className='Cart_quantity'>{item.quantity}db</div>

                        <span 
                            className="material-symbols-outlined" 
                            onClick={()=>this.deleteConfirmed(item.id)}
                        >
                            delete
                        </span>
                        <Checkbox 
                            className='Cart_checkbox'
                            onChange={this.onChange} 
                            value={{
                                item: item.itemid, 
                                itemName: item.name,
                                itemQuantity: item.quantity
                            }}>
                            Id: 
                                {item.itemid}
                        </Checkbox>
                    </div>
                )}
                <button className='Cart_checkout' onClick={this.addOrder}>Checkout</button>
                </div>
                
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
    withOrderContext
)(UserProductwitParams)

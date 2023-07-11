import React, { Component } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import { Navigate, useParams } from 'react-router-dom';
import { withOrderContext } from '../../core/OrderContext';
import "./Order.styl"

class Order extends Component {

    state={
        order: []
    }

    componentDidMount = async () => {
        let order = await this.props.order.getOrder(this.props.params.user)
        console.log(this.state.order)
    }

    render() {
        return (
            <div className='Order_container'>
                {!this.props.auth.isLoggedIn && <Navigate to="/"></Navigate>}
                {(this.props.order.order.length > 0) ? 
                (this.props.order.order.map((order,index)=>
                    <div className='Order_map' key={index}>
                        <div className='Order_quantity'>{order.quantity}</div>
                        <div className='Order_name'>{order.itemName}</div>
                    </div>
                )): 
                    (<p className='Order_noItem'>You have no hanging products yet!</p>)
                }
                {(this.props.order.order.length > 0) ? 
                    <button 
                        className='Order_Pay-button' 
                        onClick={()=>this.props.order.checkout(this.props.params.user,this.state.order)}
                    >Pay
                    </button>
                :
                    <button>You Cant Pay</button>
                }
            </div>
        )
    }
}

const UserProductwitParams = (props) =>{
    const params = useParams()
    return <Order params ={params} {...props}/>    
}

export default compose(
    withLoginContext,
    withThemeContext,
    withCartContext,
    withOrderContext
)(UserProductwitParams)

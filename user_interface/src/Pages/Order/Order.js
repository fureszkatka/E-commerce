import React, { Component } from 'react'
import {compose} from "recompose"
import {withLoginContext} from '../../core/LoginContext'
import { withThemeContext } from '../../core/ThemeContext';
import { withCartContext } from '../../core/CartContext';
import { Navigate, useParams } from 'react-router-dom';
import { withOrderContext } from '../../core/OrderContext';

class Order extends Component {

    state={
        order: []
    }

    componentDidMount = async () => {
        let order = await this.props.order.getOrder(this.props.params.user)
    }

    render() {
        return (
            <div className='Order_container'>
                {!this.props.auth.isLoggedin && <Navigate to ="/login"></Navigate> }
                {this.props.order.order.map((order,index) =>(
                    <div key={index}>
                        {order.id}
                    </div>
                ))}
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

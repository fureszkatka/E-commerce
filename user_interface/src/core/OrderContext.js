import React, { Component } from "react"
export const OrderContext = React.createContext()
import axios from "axios"

export class OrderProvider extends Component{
    
    state={
        order: [],
        uploaded: false,
        isOrdered: false,
        addOrder: async(userId,order)=>{
            const orders = await axios.post(`/api/${userId}/addorder`,{orders:order})
            if(orders.data){
                this.setState({
                    isOrdered: true
                })
            }
        },
        getOrder: async(userId)=>{
            
            const order = await axios.get(`/api/${userId}/getorder`)
            console.log(order.data)
            this.setState({
                order: [...order.data] 
            })
        },
        checkout: async(userId)=>{
            const checkout = await axios.put(`/api/${userId}/checkout`, {order: [...this.state.order]})
        }
    }


    render(){
        return(
            <OrderContext.Provider value={this.state}>
                {this.props.children}
            </OrderContext.Provider>
        )
    }
}

export function withOrderContext(Component){
    function MenuWithOrderContext(props) {
        return(
            <OrderContext.Consumer>
                {(value) =>
                    <Component order = {value}  {...props}/>
                }
            </OrderContext.Consumer>
        )
    }
    return MenuWithOrderContext
}

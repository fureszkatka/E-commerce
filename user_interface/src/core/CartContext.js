import React, { Component } from "react"
export const CartContext = React.createContext()
import axios from "axios"

export class CartProvider extends Component{
    
    state={
        quantity: false,
        cart: {},
        item: {},
        getCart: async(userid) =>{
            const cart = await axios.get(`/api/getcart/${userid}`)
        },
        getItem: async(id)=>{

            const resp = await axios.get(`/api/getitem/${id}`)
            this.setState({
                item: resp.data
            })
        },
        addToCart: async(product,quantity) =>{
            
            if(!this.state.cart[product.id]){
                this.setState({
                    cart: {
                        ...this.state.cart,
                        [product.id]: quantity
                    }
                })
            } else {
                this.setState({
                    cart: {...this.state.cart,
                        [product.id]: this.state.cart[product.id] + quantity
                    }
                })
            }
            
            console.log(product)
        },
        removeFromCart:(product)=>{
            return "töröl"
        },
        getQuantityOfProduct:(product) =>{
            
            if(!this.state.cart[product.id]){
                return 0
            }else{
                return this.state.cart[product.id]
            }
        },
        setProductQuantity:(product,value) =>{

        },
    }


    render(){
        return(
            <CartContext.Provider value={this.state}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export function withCartContext(Component){
    function MenuWithCartContext(props) {
        return(
            <CartContext.Consumer>
                {(value) =>
                    <Component cart = {value}  {...props}/>
                }
            </CartContext.Consumer>
        )
    }
    return MenuWithCartContext
}

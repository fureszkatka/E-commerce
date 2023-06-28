import React, { Component } from "react"
export const CartContext = React.createContext()
import axios from "axios"

export class CartProvider extends Component{
    
    state={
        quantity: false,
        cart: [],
        item: {},
        getCart: async(userid) =>{
            const cart = await axios.get(`/api/getcart/${userid}`)
            console.log(cart.data)
            this.setState({
                cart: [...cart.data]
            })
        },
        getItem: async(id)=>{

            const resp = await axios.get(`/api/getitem/${id}`)
            this.setState({
                item: resp.data
            })
        },
        addToCart: async(productId,userId,quantity,itemname) =>{
            
            const product = await axios.post("/api/addtocart", {productId,userId,quantity,itemname})
            
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

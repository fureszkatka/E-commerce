import React, { Component } from "react"
export const CartContext = React.createContext()
import axios from "axios"

export class CartProvider extends Component{
    
    state={
        quantity: false,
        cart: [],
        item: {},
        message: "",
        getCart: async(userid) =>{
            const cart = await axios.get(`/api/getcart/${userid}`)
            console.log(cart.data)
            this.setState({
                cart: [...cart.data]
            })
        },
        getItem: async(id)=>{

            
            const resp = await axios.get(`/api/getitem/${id}`)
            console.log(resp.data)
            this.setState({
                item: resp.data
            })
        },
        addToCart: async(productId,userId,quantity,itemname) =>{
            if(quantity > 0){
                const product = await axios.post("/api/addtocart", {productId,userId,quantity,itemname})
                this.setState({
                    message: "Upload successs!"
                })
            }else {
                this.setState({
                    message: "The product quantity can't be zero!"
                })
            }
        },
        deleteItem: async(userId,product)=>{
            const delorder = await axios.delete(`/api/delete/${userId}/${product}`)
            console.log(delorder.data)
        },
        setQuantityPlus: async(user, cartid, quantity)=>{
            const setquantity = await axios.put(`/api/cart/${user}/setquantity`, {cartid, quantity: quantity +1})
        },
        setQuantityMinus: async(user, cartid, quantity)=>{
            const setquantity = await axios.put(`/api/cart/${user}/setquantity`, {cartid, quantity: quantity -1})
            
        }
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

import React, { Component } from 'react';
import Home from "../Pages/Home/Home"
import Menu from '../core/Menu/Menu';
import UserHome from '../Pages/UserHome/UserHome';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginProvider } from '../core/LoginContext';
import { ThemeProvider } from "../core/ThemeContext"
import { CartProvider } from '../core/CartContext';
import { OrderProvider } from '../core/OrderContext'
import Signup from '../Pages/Signup';
import Login from '../Pages/Login/Login';
import Product from '../Pages/Product/Product';
import UserProduct from '../Pages/UserProduct/UserProduct';
import Cart from '../Pages/Cart/Cart';
import Order from '../Pages/Order/Order';


export class App extends Component {

    
    render() {
        return (
            <>
                <BrowserRouter>
                    <LoginProvider>
                        <ThemeProvider>
                            <CartProvider>
                                <OrderProvider>
                                    <Menu></Menu>
                                    <Routes>
                                        <Route path="/" index element={<Home />} />
                                        <Route path="/:user" index element={<UserHome />} />
                                        <Route path="/signup" element={<Signup/>} />
                                        <Route path="/login" element={<Login/>} />
                                        <Route path="/logout/:item" element={<Product/>} />
                                        <Route path="/:user/:product" element={<UserProduct/>} />
                                        <Route path="/:user/cart" element={<Cart/>} />
                                        <Route path="/:user/order" element={<Order/>} />
                                    </Routes>
                                </OrderProvider>
                            </CartProvider>
                        </ThemeProvider>
                    </LoginProvider>
                </BrowserRouter>
            </>
        );
    }
}
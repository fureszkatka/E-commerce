import React, { Component } from 'react';
import Home from "../Pages/Home/Home"
import Menu from '../core/Menu/Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginProvider } from '../core/LoginContext';
import {ThemeProvider} from "../core/ThemeContext"
import Signup from '../Pages/Signup';
import Login from '../Pages/Login/Login';


export class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <LoginProvider>
                        <ThemeProvider>
                            <Menu></Menu>
                            <Routes>
                                <Route path="/" index element={<Home />} />
                                <Route path="/signup" element={<Signup/>} />
                                <Route path="/login" element={<Login/>} />
                            </Routes>
                        </ThemeProvider>
                    </LoginProvider>
                </BrowserRouter>
            </>
        );
    }
}
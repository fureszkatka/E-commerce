import React, { Component } from 'react';
import Home from "./Pages/Home"
import Menu from './core/Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginProvider } from './core/LoginContext';


export class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <LoginProvider>
                        <Menu></Menu>
                        <Routes>
                            <Route index element={<Home />} />
                        </Routes>
                    </LoginProvider>
                </BrowserRouter>
            </>
        );
    }
}
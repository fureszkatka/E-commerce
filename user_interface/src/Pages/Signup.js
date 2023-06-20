import { withLoginContext } from "../core/LoginContext";
import React,{Component} from "react";
import axios from "axios"
import {Navigate} from "react-router-dom"

class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        message: ""
    }

    handleChange = (value) => (e) =>{
        this.setState({
            [value]: e.target.value
        })
    }

    signup = async() =>{

        const {name,email,password} = this.state

        let signup = await axios.post('/api/signup', {name, email, password})
        
        console.log(signup)

        if(signup.error){
            this.setState({
                message: signup.error
            })
        }
        if(signup.message){
            this.setState({
                message: signup.message
            })
        }
    }


    render(){
        const { name,email,password,message} = this.state
        return (
            <div className="Signup_container">
                <div className="Signup_background">
                    <div className="Signup_inputs-container">
                        <input value={name} onChange={this.handleChange("name")} />
                        <input value={email} onChange={this.handleChange("email")}/>
                        <input value={password} onChange={this.handleChange("password")}/>
                    </div>
                    <div className="Signup_button-container">
                        <button onClick={this.signup}>Signup</button>
                    </div>
                    <p>{message}</p>
                </div>
            </div>
        );
    }
}

export default withLoginContext(Signup);
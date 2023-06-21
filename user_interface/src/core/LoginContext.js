import React, { Component } from "react"
import jscookie from "js-cookie"
export const LoginContext = React.createContext()
import axios from "axios"



export class LoginProvider extends Component{
    
    state={
        isLoggedIn: false,
        login: async(email,password) =>{

            const resp =  await axios.post('/api/login', {email,password})
            
            if(resp.error){
                this.setState({
                    isLoggedIn: false
                })
                return resp.error
            }
            this.setState({
                isLoggedIn: true
            })
        },
        logout: () =>{
            jscookie.remove("kate-style-token")
            this.setState({
                isLoggedIn: false
            })
        }
    }

    //Check if the jwt token is active for authentication
    componentDidMount=() =>{
        const token = jscookie.get("kate-style-token")
        if(token){
            this.setState({
                isLoggedIn:true
            })
        }

    }   
    
    render(){
        return(
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export function withLoginContext(Component){
    function MenuWithLoginContext(props) {
        return(
            <LoginContext.Consumer>
                {(value) =>
                    <Component auth = {value}  {...props}/>
                }
            </LoginContext.Consumer>
        )
    }
    return MenuWithLoginContext
}

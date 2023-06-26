import React, { Component } from "react"
import jscookie from "js-cookie"
export const LoginContext = React.createContext()
import axios from "axios"



export class LoginProvider extends Component{
    
    state={
        isLoggedIn: false,
        isShown: false,
        loaded: false,
        closePopup:() =>{
            this.setState({
                isShown: false
            })
        },
        openPopup: () =>{
            this.setState({
                isShown: true
            })
        },
        login: async(email,password) =>{

            const resp =  await axios.post('/api/login', {email,password})
            console.log(resp)
            if(resp.error){
                this.setState({
                    isLoggedIn: false
                })
                return resp.error
            }
            this.setState({
                isLoggedIn: true,
                user: resp.data.user
            })
        },
        logout: () =>{
            jscookie.remove("kate-style-token")
            this.setState({
                isLoggedIn: false,
                user: []
            })
        },
        user: [],
        getUser: async(email,password)=> {
            const resp =  await axios.get('/api/getuser', {email,password})

            this.setState({
                user: resp.data.user
            })
        }
    }

    //Check if the jwt token is active for authentication
    componentDidMount=async() =>{
        const token = jscookie.get("kate-style-token")
        if(token){
            const resp =  await axios.get('/api/getuser')

            this.setState({
                isLoggedIn:true,
                user: resp.data
            })
        }
        this.setState({
            loaded: true
        })

    }   
    
    render(){
        if(!this.state.loaded){
            return null
        }
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

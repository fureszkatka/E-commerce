import React, { Component } from "react"
export const ThemeContext = React.createContext()

export class ThemeProvider extends Component{
    
    state={
        isDark: false,
        dark: {
            color: "white",
            backgroundColor: "black"
        },
        setDark: ()=>{
            this.setState({
                isdark: true
            })
        }
    }

    render(){
        return(
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export function withThemeContext(Component){
    function MenuWithThemeContext(props) {
        return(
            <ThemeContext.Consumer>
                {(value) =>
                    <Component theme = {value}  {...props}/>
                }
            </ThemeContext.Consumer>
        )
    }
    return MenuWithThemeContext
}

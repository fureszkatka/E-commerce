import React, { Component } from 'react'
import { withLoginContext } from '../core/LoginContext';


export class Login extends Component {
  render() {
    return (
      <div>Login</div>
    )
  }
}

export default withLoginContext(Login);
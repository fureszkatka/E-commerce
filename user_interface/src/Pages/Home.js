import React, { Component } from 'react';
import {withLoginContext} from '../core/LoginContext'


class Home extends Component {
    render() {
        return (
            <div>
                {this.props.login.value}     
            </div>
        );
    }
}

export default withLoginContext(Home);
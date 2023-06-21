import React, { Component } from 'react';
import {withLoginContext} from '../core/LoginContext'
import { withThemeContext } from '../core/ThemeContext';

class Home extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default withLoginContext(withThemeContext(Home));
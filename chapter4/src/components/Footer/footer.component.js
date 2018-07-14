import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'

class Footer extends Component {
    btnClick = () => {
        this.props.history.replace({
            pathname: '/dashboard',
            state: { from: this.props.match.url }
        })
    }
    render() {
        return (
            <button onClick={this.btnClick}>
                Click Me!
            </button>
        )
    }
}

export default withRouter(Footer);
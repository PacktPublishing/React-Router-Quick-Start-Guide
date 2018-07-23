import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class StocksComponent extends Component {
    state = {
        isUserLoggedIn: false
    }

    componentWillMount() {
        const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
        if (isUserLoggedIn) {
            this.setState({
                isUserLoggedIn
            });
        }
    }

    logout = (event) => {
        event.preventDefault();
        localStorage.removeItem('isUserLoggedIn');
        this.setState({
            isUserLoggedIn: false
        })
    }

    render() {
        const { location, match } = this.props;
        if (!this.state.isUserLoggedIn) {
            return (
                <Redirect to={{
                    pathname: "/login",
                    state: { callbackURL: match.url }
                }} />
            )
        }

        return (
            <div>
                In StocksComponent
            </div>
        )
    }
}
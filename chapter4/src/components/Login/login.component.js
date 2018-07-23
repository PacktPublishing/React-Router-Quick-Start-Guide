import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class LoginComponent extends Component {
    state = {
        isUserLoggedIn: false,
        userName: '',
        userPassword: ''
    }

    componentWillMount() {
        const isUserLoggedIn = JSON.parse(localStorage.getItem('isUserLoggedIn'));
        if (isUserLoggedIn) {
            this.setState({ 'isUserLoggedIn': true });
        }
    }

    login = (event) => {
        event.preventDefault();
        if (this.state.userName === 'foo' && this.state.userPassword === 'bar') {
            localStorage.setItem('isUserLoggedIn', true);
            this.setState({ 'isUserLoggedIn': true });
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        });
    }

    handleUserPasswordChange = (event) => {
        this.setState({
            userPassword: event.target.value
        });
    }

    render() {
        const { location: { state } } = this.props;
        if (this.state.isUserLoggedIn) {
            // return (
            //     <Redirect to={{
            //         pathname: "/user",
            //         state: {
            //             from: this.props.match.url,
            //             userName: this.state.userName
            //         }
            //     }} />
            // )
            return (
                <Redirect to={{
                    pathname: state && state.callbackURL || "/user",
                    state: {
                        from: this.props.match.url,
                        userName: this.state.userName
                    }
                }} />
            )
        }
        return (
            <div className="container">
                <form className="col-6">
                    <div className="form-group">
                        <label htmlFor="user-name">Email</label>
                        <input
                            id="user-name"
                            className="form-control"
                            type="text"
                            value={this.state.userName}
                            onChange={this.handleUserNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-password">Password</label>
                        <input
                            id="user-password"
                            className="form-control"
                            type="password"
                            onChange={this.handleUserPasswordChange} />
                    </div>
                    <button type="submit" onClick={this.login}>Submit</button>
                </form>
            </div>
        )
    }
}
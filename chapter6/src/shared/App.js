import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { HomeComponent } from './Home/home.component';
// import './App.css';

export class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <Route
                    path="/"
                    exact
                    render={({ staticContext, }) => {

                        if (staticContext) {
                            staticContext.status = 301;
                        }
                        return (
                            <Redirect to="/home" />
                        )
                    }}

                />
                <Route
                    path='/home'
                    render={({ staticContext }) => {
                        if (!__isBrowser__) {
                            return (
                                <div>
                                    Inside Home Route (SSR), Message - {staticContext.message}
                                </div>
                            );
                        }

                        return (
                            <div>
                                Inside Home Route (Browser), Message
                            </div>
                        );
                    }}
                />
                <Route
                    path='/dashboard/'
                    strict
                    render={() => <div>Inside Dashboard Route</div>}
                />

                <Route
                    path="/github/:githubID"
                    render={({ match }) => <div> Requested Github profile for {match.params.githubID}</div>}
                />

            </div>
        );
    }
}
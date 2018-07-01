import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { LoginComponent } from '../Login/login.component';

export class SettingsComponent extends Component {
    render() {
        const { match } = this.props;
        return (
            <React.Fragment>
                <nav>
                    <Link to={`${match.url}/login`}>Login</Link>
                    <Link to={`${match.url}/user`}>User</Link>
                </nav>
                {/* <Switch>
                    <Route
                        path={`${match.url}/login`}
                        component={LoginComponent}
                    />
                    <Route
                        path={`${match.url}/:id`}
                        render={({ match }) =>
                            <div> Route with path {match.url}</div>
                        }
                    />
                </Switch> */}
                <Switch>
                    <Route
                        path={`${match.url}/login`}
                        component={LoginComponent}
                    />
                    <Route
                        path={`${match.url}/user`}
                        render={({ match }) =>
                            <div> Route with path {match.url}</div>
                        }
                    />
                    <Redirect
                        from={`${match.url}/home`}
                        to={`${match.url}/login`}
                    />
                    {/* <Route
                        render={({ location }) =>
                            <div> 404 - {location.pathname} not found</div>
                        }
                    /> */}
                    {/* <Route
                        path="*"
                        render={({ location }) =>
                            <div> 404 - {location.pathname} not found</div>
                        }
                    /> */}
                    <Redirect to="/home" />
                </Switch>
            </React.Fragment >
        )
    }
}
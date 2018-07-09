import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { UserComponent } from './components/user/user.component';
import './App.css';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { CategoryComponent } from './components/category/category.component';
import { GitHubComponent } from './components/github/github.component';

class App extends Component {
    render() {
        return (
            <div className="container">
                {/* Route with exact prop */}
                <Route
                    path="/"
                    component={HomeComponent}
                    exact
                />

                {/* Route with strict prop*/}
                <Route
                    path="/dashboard/"
                    component={DashboardComponent}
                    strict
                />

                {/* Route with sensitive prop */}
                <Route
                    path="/Dashboard"
                    component={DashboardComponent}
                    sensitive
                />

                <Route
                    path="/dashboard"
                    component={StockListComponent}
                    sensitive
                />

                {/* Route component props - match, history, location, staticContext */}
                <Route
                    path="/sidenav"
                    children={({ match, history, location, staticContext }) => {
                        console.log(match);
                        console.log(history);
                        console.log(location);
                        console.log(staticContext);
                        return (
                            <div> Inside Sidenav route </div>
                        );
                    }}
                />

                {/* Route with params */}
                <Route
                    path="/user/:id"
                    render={({ match }) => {
                        return (
                            <div> Inside User route {match.params.id}</div>
                        );
                    }}
                />

                <Route
                    path="/github/:githubID/twitterID?"
                    component={GitHubComponent}
                    exact
                />

                <Route
                    path="/github/:githubID/twitterID?"
                    component={GitHubComponent}
                    exact
                />

                <Route
                    path="/github/:githubID(\w+)"
                    component={GitHubComponent}
                />
                <Route
                    path="/user/:userID(\d+)"
                    component={StockListComponent}
                />

                {/* Nested routes example */}
                <Route
                    path="/category"
                    component={CategoryComponent}
                />
                {/* Generating <Route>'s from a JSON config */}
                <Route
                    path="/stocks"
                    component={StockListComponent}
                />
            </div>
        );
    }
}

export default App;

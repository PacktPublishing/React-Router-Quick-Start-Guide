import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { UserComponent } from './components/user/user.component';
import './App.css';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { CategoryComponent } from './components/category/category.component';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Route
                    path="/"
                    component={HomeComponent}
                    exact
                />

                <Route
                    path="/dashboard/"
                    component={DashboardComponent}
                    strict
                />

                <Route
                    path="/sidenav"
                    children={({ match, staticContext }) => {
                        console.log(match)
                        console.log(staticContext)
                        return (
                            <div> Inside Sidenav route </div>
                        );
                    }}
                />

                <Route
                    path="/user"
                    render={({ match }) => {
                        console.log(match);
                        return (
                            <div> Inside User route </div>
                        );
                    }}
                />

                <Route
                    path="/category"
                    component={CategoryComponent}
                />

                <Route
                    path="/stocks"
                    component={StockListComponent}
                />
            </div>
        );
    }
}

export default App;

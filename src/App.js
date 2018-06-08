import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Route
                    path="/home"
                    component={HomeComponent}
                />
                <Route
                    path="/dashboard"
                    component={DashboardComponent}
                />
            </div>
        );
    }
}

export default App;

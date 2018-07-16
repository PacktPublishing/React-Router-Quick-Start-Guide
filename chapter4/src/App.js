import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { HomeComponent } from './components/Home/home.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { LoginComponent } from './components/Login/login.component';
import { UserComponent } from './components/User/user.component';
import Footer from './components/Footer/footer.component';
import { SettingsComponent } from './components/Settings/settings.component';
import { StocksComponent } from './components/Stocks/stocks.component';
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav>
          <Link
            to="/dashboard">
            Dashboard
          </Link>
          <Link
            to="/stocks">
            Stocks
          </Link>
          <Link
            to="/settings">
            Settings (Switch)
          </Link>
        </nav>
        <main>
          {/* Redirect / to login */}
          {/* <Route
            path="/"
            render={() => <Redirect to="/login" />}
            exact /> */}

          <Route
            path="/login"
            component={LoginComponent}
          />

          {/* protected <Route> */}
          <Route
            path="/user"
            component={UserComponent}
          />

          {/* Home component redirects to /dashboard with to prop as object */}
          <Route
            path="/home"
            component={HomeComponent}
            exact
          />

          <Route
            path="/stocks"
            component={StocksComponent}
          />

          {/* <Route
            path="/dashboard"
            component={DashboardComponent}
          /> */}

          {/* Switch component in SettingsComponent */}
          <Route
            path="/settings"
            component={SettingsComponent}
          />


          {/* <Switch>
            <Route
              path="/"
              component={LoginComponent}
            />
            <Route
              path="/dashboard"
              component={DashboardComponent}
            />
          </Switch> */}
          <Switch>
            <Route
              path="/github"
              component={LoginComponent}
            />
            <Route
              path="/github/:userId"
              component={DashboardComponent}
            />
          </Switch>

          {/* <Switch
            location={{
              pathname: "/user"
            }}>
            <Route
              path="/"
              render={({ location }) =>
                <div>Inside Switch with location prop {location.pathname} </div>
              }
            />

          </Switch> */}
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;

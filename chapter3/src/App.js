import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { UserComponent } from './components/user/user.component';
import './App.css';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { CategoryComponent } from './components/category/category.component';
import { Footer } from './components/footer/footer.component';
class App extends Component {
    refCallback(node) {
        node.onmouseover = () => {
            node.focus();
        }
    }

    render() {
        return (
            <div className="container">
                <nav>
                    <Link
                        to="/"
                        innerRef={this.refCallback}>
                        Home
                    </Link>
                    <Link
                        to="/dashboard/"
                        innerRef={this.refCallback}>
                        Dashboard
                    </Link>

                    {/* <Link
                        to={{
                            pathname: '/user',
                            search: '?id=1',
                            hash: '#hash',
                            state: { isAdmin: true }
                        }}>
                        User
                    </Link> */}
                    {/* <NavLink
                        to="/"
                        exact>
                        Home
                    </NavLink>
                    <NavLink
                        to="/dashboard/"
                        activeClassName="selectedLink"
                        strict>
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/user"
                        activeStyle={{
                            background: 'red',
                            color: 'white'
                        }}
                        location={{
                            search: '?id=2',
                        }}
                        isActive={(match, location) => {
                            console.log(match);
                            console.log(location);
                            if (!match) {
                                return false;
                            }
                            const searchParams = new URLSearchParams(location.search);
                            return match.isExact && searchParams.has('id');
                        }}>
                        User
                    </NavLink>
                    <NavLink
                        to="/category"
                        activeClassName="selectedLink">
                        Category
                    </NavLink> */}

                </nav>


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
                    path="/user"
                    render={({ location }) => {
                        const { pathname, search, hash, state } = location;
                        return (
                            <div>
                                Inside User route
                                <h5>Pathname: {pathname}</h5>
                                <h5>Search: {search}</h5>
                                <h5>Hash: {hash}</h5>
                                <h5>State: {'{'}
                                    {state && Object.keys(state).map((element, index) => {
                                        return (
                                            <span key={index}>
                                                {element}: {state[element].toString()}
                                            </span>
                                        )
                                    })}
                                    {'}'}
                                </h5>
                            </div>
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

                <Route
                    path="['category', 'stocks']"
                    render={() => {
                        return <div> Inside some route </div>
                    }} />
                <Footer />
            </div >
        );
    }
}

export default App;

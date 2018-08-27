import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Counter from './components/counter.component';
import Dashboard from './components/dashboard.component';
import Home from './components/home.component';

const NavBar = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link
        to={{
          pathname: '/dashboard',
          search: 'q=1',
          hash: 'test',
          state: { key: 'value ' }
        }}>
        Dashboard
      </Link>
    </nav >
  )
}

class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <Counter />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/counter" component={Counter} />
        </Switch>

      </div>

    );
  }
}

// class App extends Component {
//   render() {
//     return <Counter />;
//   }
// }

export default App;

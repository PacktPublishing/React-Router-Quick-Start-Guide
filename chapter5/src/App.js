import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter, Link, Prompt, HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import logo from './logo.svg';
import './App.css';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog.component';

// uncomment the below component to see a warning message in the console stating that you can change the history
// class App extends Component {
//   state = {
//     customHistory: createBrowserHistory()
//   }

//   componentDidMount() {
//     this.setState({
//       customHistory: createBrowserHistory()
//     })
//   }

//   render() {
//     return (
//       <Router history={this.state.customHistory}>
//         <div className="container">
//           <Route
//             path="/"
//             render={() => <div> In Home </div>} />
//         </div>
//       </Router>
//     );
//   }
// }

class App extends Component {
  state = {
    showConfirmationDialog: false,
    message: '',
    callback: null
  }

  userConfirmationFuncWithoutState = (message, callback) => {
    const status = window.confirm(message);
    callback(status);
  }
  userConfirmationFunc = (message, callback) => {
    this.setState({
      showConfirmationDialog: true,
      message: message,
      callback: callback
    });
  }

  handleClose(status) {
    this.state.callback(status);
    this.setState({
      showConfirmationDialog: false,
      message: '',
      callback: null
    })
  }

  render() {
    // include this in place of BrowserRouter to see HashRouter in action
    {/* <HashRouter hashType="hashbang"> */ }
    return (
      <BrowserRouter
        basename="/admin"
        keyLength={10}
        getUserConfirmation={this.userConfirmationFunc}>

        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/user">User</Link>
          </nav>
          <Route
            path="/"
            render={() => <div> Inside Home </div>}
            exact
          />
          <Route
            path="/dashboard"
            render={({ location }) =>
              <div> In Dashboard, Location Key: {location.key} </div>
            }
          />
          <Route
            path="/user"
            render={({ location }) =>
              <div>
                In User, Location Key: {location.key}
                <Prompt message="This is shown in a confirmation modal" />
              </div>
            }
          />
          <ConfirmationDialog
            isOpen={this.state.showConfirmationDialog}
            message={this.state.message}
            handleClose={this.handleClose.bind(this)}
          />
        </div >
      </BrowserRouter>
    )
    // </HashRouter >
  }
}

export default App;

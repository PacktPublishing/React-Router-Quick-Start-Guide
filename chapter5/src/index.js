import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const customHistory = createBrowserHistory();

// ReactDOM.render(
//     <Router history={customHistory}>
//         <App />
//     </Router>, document.getElementById('root'));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

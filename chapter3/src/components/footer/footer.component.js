import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class FooterComponent extends Component {
    render() {
        console.log(this.props);
        return (
            <footer>
                In Footer
                <div>
                    <button onClick={() => this.props.history.push('/user')}>User</button>
                    <button onClick={() => this.props.history.push('/stocks')}>Stocks</button>
                    <Link to='subroute'>User</Link>

                    <Route
                        path='/subroute'
                        render={() => {
                            return <span>Inside Footer Subroute</span>
                        }} />
                </div>
            </footer >
        )
    }
}
export const Footer = withRouter(FooterComponent);

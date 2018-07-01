import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class HomeComponent extends Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                {/* <Redirect to="/dashboard" push /> */}
                <Redirect
                    to={{
                        pathname: '/dashboard',
                        search: '?q=1',
                        hash: '#hash',
                        state: { from: match.url }
                    }}
                    exact
                />
            </div>

        )
    }
}
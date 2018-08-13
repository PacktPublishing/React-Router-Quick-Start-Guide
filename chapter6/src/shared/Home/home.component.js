import React, { Component } from 'react';

export class HomeComponent extends Component {
    render() {
        return (
            <div>In Home, Message -  {this.props.staticContext.message}</div>
        )
    }
}
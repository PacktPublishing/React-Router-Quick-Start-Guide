import React, { Component } from 'react';

export class StockListComponent extends Component {

    componentWillMount() {
        console.log('Inside StockList component\'s componentWillMount fn');
    }
    render() {
        const { history, location, match, staticContext } = this.props;
        console.log(match);
        return (
            <div>
                Inside User Component
            </div>
        );
    }
    componentWillUnmount() {
        console.log('Inside User component\'s componentWillUnmount fn');
    }
}
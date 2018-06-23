import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const StatsComponent = () => {
    return (
        <div> Showing Stats </div>
    );
}

const NewsComponent = () => {
    return (
        <div> Showing News </div>
    );
}

const TrendingComponent = () => {
    return (
        <div> Showing Trends </div>
    );
}

const STOCK_ROUTES = [
    {
        path: 'stats',
        component: StatsComponent,
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'trending',
        component: TrendingComponent,
    }
];

export class StockListComponent extends Component {

    componentWillMount() {
        console.log('Inside StockList component\'s componentWillMount fn');
    }
    render() {
        const { match } = this.props;

        return (
            <div>
                Inside Stocks, try /stocks/stats or /stocks/news or /stocks/trending
                {
                    STOCK_ROUTES.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={`${match.url}/${route.path}`}
                                component={route.component} />
                        )
                    })
                }
            </div>
        );
    }
    componentWillUnmount() {
        console.log('Inside User component\'s componentWillUnmount fn');
    }
}
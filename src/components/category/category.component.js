import React from 'react';
import { Route } from 'react-router-dom';

export const CategoryComponent = ({ match }) => {
    return (
        <div className="nested-route-container">
            <div className="root-info">
                <h4> Root: </h4>
                <h5> path: {match.path}, isExact: {match.isExact.toString()}</h5>
            </div>

            <Route
                path={`${match.url}/pictures`}
                render={({ match }) => {
                    return (
                        <div>
                            <h4> Viewing pictures: </h4>
                            <h5> path: {match.path}, isExact: {match.isExact.toString()}</h5>
                        </div>
                    )
                }}
            />

            <Route
                path={`${match.url}/books`}
                render={({ match }) => {
                    return (
                        <div>
                            <h4> Viewing books: </h4>
                            <h5> path: {match.path}, isExact: {match.isExact.toString()}</h5>
                            <Route
                                path={`${match.url}/popular`}
                                render={({ match }) => (
                                    <div> Inside popular, path: {match.path} </div>
                                )} />
                        </div>
                    )
                }}
            />
        </div>
    )
}
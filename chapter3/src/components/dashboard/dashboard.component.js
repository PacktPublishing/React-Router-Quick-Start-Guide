import React from 'react';

export const DashboardComponent = (props) => (
    <div className="dashboard">
        Inside Dashboard route
        <button onClick={() => props.history.push('/user')}>
            User
        </button>
    </div>
);

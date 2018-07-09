import React from 'react';

export const HomeComponent = ({ match }) => (
    <div>
        Inside Home route {match.params.id}
    </div>
);

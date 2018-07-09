import React, { Component } from 'react';

export class GitHubComponent extends Component {
    render() {
        const { match: { params } } = this.props;
        return (
            <div>
                In GitHubComponent <br />
                GitHub ID - {params.githubID} <br />
                TwitterID - {params.twitterID}
            </div>
        )
    }
}

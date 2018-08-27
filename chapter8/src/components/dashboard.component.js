import React from 'react';
import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';

const Dashboard = ({ pathname, search, hash, state, count, push, replace }) => {
    return (
        <div>
            <h4>In Dashboard</h4>
            <div> Pathname  : {pathname} </div>
            <div> Search    : {search}   </div>
            <div> Hash      : {hash}     </div>
            <div> State-Key : {state.key}</div>
            <div> Count     : {count}    </div>
            <button onClick={() => {
                push('/')
            }}>
                HOME
            </button>
            <button onClick={() => {
                console.log('In Counter');
                replace('/counter')
            }}>
                COUNTER
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
    state: state.router.location.state,
    count: state.counter
});

const mapDispatchToProps = dispatch => ({
    push: (path) => dispatch(push(path)),
    replace: (path) => dispatch(replace(path))
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
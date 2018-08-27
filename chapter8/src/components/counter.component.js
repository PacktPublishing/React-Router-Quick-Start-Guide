import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter';

const Counter = ({ count, increment, decrement }) => (
    <div>
        <h4>Counter</h4>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>
)

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
export class StockListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormSubmitted: false
        }
    }
    componentWillMount() {
        console.log('Inside StockList component\'s componentWillMount fn');
    }
    render() {
        const { history, location, match, staticContext } = this.props;
        console.log(this.state);
        return (
            <div>
                {/* <form> */}
                Inside Stock Component

                    <div className="form-group">
                    <label>Username</label>
                    <input id="username" type="text" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input id="confirm-password" type="password" onChange={this.handleInputChange} />
                </div>
                <button onClick={this.handleFormSubmit} type="submit">
                    Submit
                    </button>
                <Prompt message='Are you sure?' />
                <Prompt
                    when={this.state.isFormSubmitted}
                    message='Are you sure?' />
                <Prompt
                    when={this.state.isFormSubmitted}
                    message={(location) => `Are you sure you want to navigate to ${location.pathname}?`} />
                {/* </form> */}
            </div>
        );
    }

    handleInputChange(event) {
        console.log(event.target.value);
    }

    handleFormSubmit = (event) => {
        // event.prevenDefault();
        this.setState({ 'isFormSubmitted': true });
    }
    componentWillUnmount() {
        console.log('Inside User component\'s componentWillUnmount fn');
    }
}
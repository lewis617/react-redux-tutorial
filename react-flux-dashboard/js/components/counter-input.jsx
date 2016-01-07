import React from 'react';

import counterActions from '../actions/counter-actions.js';

const ENTER_KEY_CODE = 13;

export default class CounterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.componentWillReceiveProps = () => {
            this.forceUpdate();
        };

        this.addCounter = () => {
            counterActions.addCounter();
        };

        this.onChange = (event) => {
            this.setState({
                value: event.target.value
            });
        };

        this.save = () => {
            counterActions.addCounter(this.state.value);
        };

        this.onEnter = (event) => {
            if (event.keyCode === ENTER_KEY_CODE) {
                this.save();
            }
        };
    };

    render() {
        return (
            <div className="counter-input">
                <input
                    autoFocus={true}
                    className={this.props.className}
                    onBlur={this.onChange}
                    onChange={this.onChange}
                    onKeyDown={this.onEnter}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                />

                <button className="add btn btn-blue" onClick={this.save}>add counter</button>
            </div>
        );
    }
}

CounterInput.displayName = 'CounterInput';

CounterInput.propTypes = {
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
};

import React from 'react';
import counterStore from '../stores/counter-store.js';
import counterActions from '../actions/counter-actions.js';
import CounterItem from './counter-item';
import CounterInput from './counter-input';

export default class Counters extends React.Component {
    constructor(props) {
        super(props);

        this.componentDidMount = () => {
            counterActions.getCounters();
        };

        this.componentWillMount = () => {
            counterStore.addChangeListener(this.onStoreChange);
        };

        this.componentWillUnmount = () => {
            counterStore.removeChangeListener(this.onStoreChange);
        };

        this.onStoreChange = () => {
            this.forceUpdate();
        };
    }

    render() {
        let allCounters = counterStore.getCounters();

        if (Object.keys(allCounters).length < 1) {
            return null;
        }

        let counters = [];

        for (let key in allCounters) {
            if (allCounters) {
                counters.push(<CounterItem
                    count={allCounters[key].count}
                    id={key}
                    key={key}
                    name={allCounters[key].name}
                />);
            }
        }

        return (
            <div className="counter-app">
                <h2 className="title">Counters</h2>
                <CounterInput
                    className="input"
                    placeholder="Type here"
                />

                <ul className="counter-list">{counters}</ul>
            </div>
        );
    }
}

Counters.displayName = 'Counters';

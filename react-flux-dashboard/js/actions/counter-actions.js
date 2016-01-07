import Dispatcher from '../dispatcher/dispatcher';
import counterConstants from '../constants/counter-constants';

export default {
    getCounters: () => {
        Dispatcher.dispatch({
            actionType: counterConstants.GET_COUNTERS
        });
    },

    getCounter: (id) => {
        Dispatcher.dispatch({
            actionType: counterConstants.GET_COUNTER,
            id
        });
    },

    addCounter: (name) => {
        Dispatcher.dispatch({
            actionType: counterConstants.ADD_COUNTER,
            count: 0,
            name
        });
    },

    deleteCounter: (id) => {
        Dispatcher.dispatch({
            actionType: counterConstants.DELETE_COUNTER,
            id
        });
    },

    incrementCounter: (id, count) => {
        Dispatcher.dispatch({
            actionType: counterConstants.INCREMENT_COUNTER,
            count: count += 1,
            id
        });
    },

    decrementCounter: (id, count) => {
        Dispatcher.dispatch({
            actionType: counterConstants.DECREMENT_COUNTER,
            count: count -= 1,
            id
        });
    }
};

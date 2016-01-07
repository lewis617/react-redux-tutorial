import {EventEmitter} from 'events';
import counterConstants from '../constants/counter-constants';
import dispatcher from '../dispatcher/dispatcher';
import counterWebApiUtils from '../utils/counter-web-api-utils';

const CHANGE_EVENT = 'change';

let counters = {};

class CounterStore extends EventEmitter {
    getCounters() {
        return counters;
    }

    getCounter(id) {
        return counters[id];
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }
}

const counterStore = new CounterStore();

export default counterStore;

// Register callback to handle all updates
dispatcher.register((payload) => {
    switch (payload.actionType) {
        case counterConstants.GET_COUNTERS:
            counterWebApiUtils.getCounters().on('value', (data) => {
                counters = data.val();
                counterStore.emitChange();
            });

            break;

        case counterConstants.ADD_COUNTER:
            counterWebApiUtils.addCounter(payload.count, payload.name).on('value', (data) => {
                counters[data.key()] = {
                    name: payload.name,
                    count: payload.count
                };

                counterStore.emitChange();
            });

            break;

        case counterConstants.DELETE_COUNTER:
            counterWebApiUtils.deleteCounter(payload.id).on('value', () => {
                delete counters[payload.id];
                counterStore.emitChange();
            });

            break;

        case counterConstants.INCREMENT_COUNTER:
            counterWebApiUtils.updateCounter(payload.id, payload.count).on('value', () => {
                counters[payload.id].count = payload.count;
                counterStore.emitChange();
            });

            break;

        case counterConstants.DECREMENT_COUNTER:
            counterWebApiUtils.updateCounter(payload.id, payload.count).on('value', () => {
                counters[payload.id].count = payload.count;
                counterStore.emitChange();
            });

            break;

        default:
        // no op
    }
});

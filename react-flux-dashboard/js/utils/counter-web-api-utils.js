import Firebase from 'firebase';

const fb = new Firebase('https://react-counter.firebaseio.com/');

const onComplete = (error) => {
    if (error) {
        console.log('Synchronization failed');
        console.log(error);
    }
};

export default {
    getCounters: () => {
        return fb.child('/counters/');
    },

    updateCounter: (id, value) => {
        let counter = fb.child('/counters/' + id  + '/count');

        counter.set(value, onComplete);

        return counter;
    },

    deleteCounter: (id) => {
        let counter = fb.child('/counters/' + id);

        counter.remove();

        return counter;
    },

    addCounter: (count, name) => {
        let counters = fb.child('/counters/');

        let counterObj = {
            count,
            name
        };

        return counters.push(counterObj, onComplete);
    }
};

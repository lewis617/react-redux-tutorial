import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { ALERT_SHOW, ALERT_HIDE, alertShow, alertHide, alertMessage, hideAllAlert } from '../redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('action test', () => {
  it('alertShow should create ALERT_SHOW', () => {
    expect(alertShow('message', 'success', 0))
      .toEqual({
        payload: {
          messageText: 'message',
          messageType: 'success',
          key: 0
        },
        type: ALERT_SHOW
      });
  });
  it('alertHide should create ALERT_HIDE', () => {
    expect(alertHide(0))
      .toEqual({
        payload: {
          key: 0
        },
        type: ALERT_HIDE
      });
  });
  it('alertMessage should create ALERT_SHOW and create ALERT_HIDE after delay', (done) => {
    const expectedActions = [
      alertShow('message', 'success', 1)
    ];
    const getState = { alerts: { lastKey: 0, items: [] } };
    const store = mockStore(getState);
    store.dispatch(alertMessage('message', 'success', 0));
    expect(store.getActions()).toEqual(expectedActions);
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions.concat([alertHide(1)]));
      done();
    }, 0);
  });
  it('hideAllAlert should create multi ALERT_HIDE after delay', (done) => {
    const expectedActions = [
      alertHide(0),
      alertHide(1)
    ];
    const getState = { alerts: { lastKey: 1, items: [{ key: 0 }, { key: 1 }] } };
    const store = mockStore(getState);
    store.dispatch(hideAllAlert(0));
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }, 0);
  });
});

it('reducer test', () => {
  it('should handle alertShow action', () => {
    expect(reducer({ items: [], lastKey: -1 }, alertShow('message', 'success', 0))).toEqual({
      items: [{
        messageText: 'message',
        messageType: 'success',
        key: 0
      }],
      lastKey: 0
    });
  });
  it('should handle alertHide action', () => {
    expect(reducer({
      items: [{ messageText: 'message', messageType: 'success', key: 0 }],
      lastKey: 0
    }, alertHide(0))).toEqual({ items: [], lastKey: 0 });
  });
  it('should handle unknown action', () => {
    expect(reducer([], { type: 'unknown' })).toEqual([]);
  });
});

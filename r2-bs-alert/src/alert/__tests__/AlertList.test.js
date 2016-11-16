import React from 'react';
import { mount } from 'enzyme';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AlertList, reducer } from '../index';

function setup(state = {}) {
  const store = createStore(
    combineReducers({ alerts: reducer }),
    state,
    applyMiddleware(thunk)
  );
  const app = mount(
    <Provider store={store}>
      <AlertList />
    </Provider>
  );
  return {
    app,
    store
  };
}

describe('AlertList', () => {
  let originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
  it('should display messages and hide all after delay', () => {
    const { app } = setup({ alerts: { lastKey: 1, items: [{ key: 0 }, { key: 1 }] } });
    expect(app.find('.alert').length).toBe(2);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000)
    }).then(() => {
      expect(app.find('.alert').length).toBe(0);
    });
  });

  it('should display messages and hide itself after clicked', () => {
    const { app } = setup({
      alerts: {
        lastKey: 1,
        items: [{ key: 0, messageText: 'messageText1' }, { key: 1, messageText: 'messageText2' }]
      }
    });
    app.find('.alert').at(1).find('button').at(0)
      .simulate('click');
    expect(app.find('.alert').text()).not.toMatch(/messageText2/);
    expect(app.find('.alert').text()).toMatch(/messageText1/);
  });
});

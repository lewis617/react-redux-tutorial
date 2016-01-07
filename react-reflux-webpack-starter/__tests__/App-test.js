jest.dontMock('../js/components/app');

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

// import App from '../js/components/app'
const App = require('../js/components/app').default

describe('app',()=>{
  it('does someting', ()=>{
    console.log('app is',App)
    var app = TestUtils.renderIntoDocument(<App/>);
    // var appNode = ReactDOM.findDOMNode(app);
    var title = TestUtils.findRenderedDOMComponentWithClass(app,'title');

    expect(title.textContent).toEqual('Hi world')
  })
})

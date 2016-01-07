jest.dontMock('../js/components/app');

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

const Todo = require('../js/components/todo').default

describe('todo',()=>{
  describe('add',()=>{
    it('should add',()=>{
      var todo = TestUtils.renderIntoDocument(<Todo/>)
      var input = TestUtils.findRenderedDOMComponentWithClass(todo,'user-input');
    })
  })
})

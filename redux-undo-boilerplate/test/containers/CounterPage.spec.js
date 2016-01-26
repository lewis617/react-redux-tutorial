import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
/*eslint-disable*/
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { Provider } from 'react-redux'
import CounterPage from '../../src/containers/CounterPage'
import configureStore from '../../src/store/configureStore'
/*eslint-enable*/

function setup (initialState) {
  const store = configureStore(initialState)
  const app = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <CounterPage />
    </Provider>
  )
  return {
    app: app,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(app, 'button').map(button => {
      return button
    }),
    p: TestUtils.findRenderedDOMComponentWithTag(app, 'p')
  }
}

describe('containers', () => {
  jsdom()

  describe('App', () => {
    it('should display initial count', () => {
      const { p } = setup()
      expect(p.textContent).to.match(/^Clicked: 0 times/)
    })

    it('should display updated count after increment button click', () => {
      const { buttons, p } = setup()
      TestUtils.Simulate.click(buttons[0])
      expect(p.textContent).to.match(/^Clicked: 1 times/)
    })

    it('should display updated count after descrement button click', () => {
      const { buttons, p } = setup()
      TestUtils.Simulate.click(buttons[1])
      expect(p.textContent).to.match(/^Clicked: -1 times/)
    })

    it('should undo increment action on undo button click', () => {
      const { buttons, p } = setup()
      TestUtils.Simulate.click(buttons[0])
      expect(p.textContent).to.match(/^Clicked: 1 times/)
      TestUtils.Simulate.click(buttons[2])
      expect(p.textContent).to.match(/^Clicked: 0 times/)
    })

    it('should redo after undo on redo button click', () => {
      const { buttons, p } = setup()
      TestUtils.Simulate.click(buttons[0])
      expect(p.textContent).to.match(/^Clicked: 1 times/)
      TestUtils.Simulate.click(buttons[2])
      expect(p.textContent).to.match(/^Clicked: 0 times/)
      TestUtils.Simulate.click(buttons[3])
      expect(p.textContent).to.match(/^Clicked: 1 times/)
    })
  })
})

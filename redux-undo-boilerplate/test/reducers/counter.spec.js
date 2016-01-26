import { expect } from 'chai'
import counter from '../../src/reducers/counter'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../src/actions/counter'

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(counter(undefined, {}).count).to.equal(0)
    })

    const testState = { count: 1 }

    it('should handle INCREMENT_COUNTER', () => {
      expect(counter(testState, { type: INCREMENT_COUNTER }).count).to.equal(2)
    })

    it('should handle DECREMENT_COUNTER', () => {
      expect(counter(testState, { type: DECREMENT_COUNTER }).count).to.equal(0)
    })

    it('should handle unknown action type', () => {
      expect(counter(testState, { type: 'unknown' }).count).to.equal(1)
    })
  })
})

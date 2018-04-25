import reducer, {
  actions,
  private_actions,
  selectors as <%= snakeEntityName %>_selectors,
} from './<%= snakeEntityName %>'

import dq_fetch_mock from 'redux/utils/dq_fetch/dq_fetch_mock'

import * as xhr_responses from './<%= snakeEntityName %>_xhr_responses'

const selectors = <%= snakeEntityName %>_selectors

describe('<%= snakeEntityName %> redux', () => {
  let sandbox
  let state
  let dispatch
  let getState

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    dq_fetch_mock.setup(sandbox)
    dispatch = sandbox.stub()
    state = reducer(undefined, {})
    getState = () => state
  })
  afterEach(() => {
    sandbox.restore()
    dq_fetch_mock.restore()
  })

  it('should have this initial state', () => {
    state = reducer(undefined, {})
    expect(state).to.exist
  })
  describe('private_actions', () => {
    it('should have a set', () => {
      state = reducer(undefined, private_actions.set())
      expect(selectors.something(state)).to.eql()
    })
  })
  describe('public actions', () => {
    it('should have a get_info', () => {
      const expected_url = '/api/v1'
      const xhr = xhr_responses.info
      dq_fetch_mock.mock(expected_url, xhr)

      return actions.get_info()(dispatch, getState)
        .then(() => {
          expect(dq_fetch_mock.url_on_call(0)).to.be.eql(expected_url)
          expect(dispatch, 'set').calledWith(private_actions.set(xhr))
        })
    })
  })
})

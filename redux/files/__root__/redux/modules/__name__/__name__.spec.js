import reducer, {
  actions,
  private_actions,
  selectors as <%= snakeEntityName %>_selectors,
  BASE_SELECTOR_PATH,
} from './<%= snakeEntityName %>'
import full_state_selectors from 'redux/test_helpers/full_state_selectors'
import dq_fetch_mock from 'redux/utils/dq_fetch/dq_fetch_mock'

import * as xhr_responses from './<%= snakeEntityName %>_xhr_responses'

const selectors = full_state_selectors(<%= snakeEntityName %>_selectors, BASE_SELECTOR_PATH)

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
    getState = () => ({[BASE_SELECTOR_PATH]: state})
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
      // state = reducer(undefined, private_actions.set())
      // expect(selectors.something(state)).to.eql()
    })
  })
  describe('public actions', () => {
    it('should have a get_info', (done) => {
      const expected_url = '/api/v1'
      const xhr = xhr_responses.info
      dq_fetch_mock.mock(expected_url, xhr)

      actions.get_info()(dispatch, getState)
      .then(() => {
        expect(dq_fetch_mock.url_on_call(0)).to.be.eql(expected_url)
        expect(dispatch, 'set').calledWith(private_actions.set(xhr))
      })
      .then(done, done)
    })
  })
})

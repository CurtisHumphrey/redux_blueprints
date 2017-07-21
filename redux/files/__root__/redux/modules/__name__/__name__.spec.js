import reducer, {
  actions,
  private_actions,
  selectors as <%= snakeEntityName %>_selectors,
  BASE_SELECTOR_PATH,
} from './<%= snakeEntityName %>'
import full_state_selectors from 'redux/test_helpers/full_state_selectors'
import _ from 'lodash'

const selectors = full_state_selectors(<%= snakeEntityName %>_selectors, BASE_SELECTOR_PATH)

describe('<%= snakeEntityName %> redux', () => {
  let sandbox
  let state
  let dispatch
  let getState

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    dispatch = sandbox.stub()
    state = reducer(undefined, {})
    getState = () => ({[BASE_SELECTOR_PATH]: state})
  })
  afterEach(() => {
    sandbox.restore()
  })

  it('should have this initial state', () => {
    state = reducer(undefined, {})
    expect(state).to.exist
  })
  describe('private_actions', () => {
  })
  describe('public actions', () => {
  })
})

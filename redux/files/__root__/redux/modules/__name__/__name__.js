import <%= snakeEntityName %>, {
  actions as simple_actions,
  private_actions,
  selectors,
  BASE_SELECTOR_PATH,
  ACTION_TYPES,
} from './<%= snakeEntityName %>_simple'
import * as thunk_actions from './<%= snakeEntityName %>_thunks'

export const actions = Object.assign({}, simple_actions, thunk_actions)

import {inject_reducers} from 'store/inject_reducers'
export default inject_reducers({<%= snakeEntityName %>})

export {
  selectors,
  BASE_SELECTOR_PATH,
  ACTION_TYPES,
  private_actions,
}

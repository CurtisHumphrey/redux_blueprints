import {
  // actions as simple_actions,
  private_actions,
  // selectors,
} from './<%= snakeEntityName %>_simple'

import dq_fetch from 'redux/utils/dq_fetch'

export const get_info = () => (dispatch, getState) => {
  return dq_fetch('/api/v1/')
    .then((data) => {
      dispatch(private_actions.set(data))
    })
    .catch(console.error)
}

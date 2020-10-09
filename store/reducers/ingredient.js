import PropTypes from 'prop-types'
import { SET_INGREDIENT, RESET_INGREDIENT } from '../../const'

const defaultState = null

export const _ingredient = PropTypes.string

export default function ingredient(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_INGREDIENT:
      return payload
    case RESET_INGREDIENT:
      return null
    default:
      return state
  }
}

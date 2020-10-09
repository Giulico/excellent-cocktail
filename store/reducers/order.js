import PropTypes from 'prop-types'
import { ADD_COCKTAIL, REMOVE_COCKTAIL, RESET_ORDER } from '../../const'

const defaultState = []

export const _order = PropTypes.arrayOf(PropTypes.shape())

export default function order(state = defaultState, { type, payload }) {
  switch (type) {
    case ADD_COCKTAIL: {
      const cocktailIndex = state.findIndex(
        (cocktail) => cocktail.id === payload.id
      )
      if (cocktailIndex > -1) {
        // Update quantity
        return [
          ...state.slice(0, cocktailIndex),
          {
            ...state[cocktailIndex],
            quantity: state[cocktailIndex].quantity + 1,
          },
          ...state.slice(cocktailIndex + 1, state.length),
        ]
      } else {
        // Add new
        return [...state, { ...payload, quantity: 1 }]
      }
    }

    case REMOVE_COCKTAIL: {
      const cocktailIndex = state.findIndex(
        (cocktail) => cocktail.id === payload.id
      )
      // Assuming order has this cocktail
      if (state[cocktailIndex].quantity > 1) {
        // Update quantity
        return [
          ...state.slice(0, cocktailIndex),
          {
            ...state[cocktailIndex],
            quantity: state[cocktailIndex].quantity - 1,
          },
          ...state.slice(cocktailIndex + 1, state.length),
        ]
      } else {
        return state.filter((cocktail) => cocktail.id !== payload.id)
      }
    }

    case RESET_ORDER:
      return defaultState

    default:
      return state
  }
}

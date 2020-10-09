import { combineReducers } from 'redhooks'

import ingredient from './ingredient'
import order from './order'

export default combineReducers({
  ingredient,
  order,
})

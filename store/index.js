import PropTypes from 'prop-types'
import { createStore } from 'redhooks'
import reducer from './reducers'

// Types
import { _ingredient } from './reducers/ingredient'
import { _order } from './reducers/order'

const _dispatch = PropTypes.func.isRequired

export { _dispatch, _ingredient, _order }

export default createStore(reducer, {})

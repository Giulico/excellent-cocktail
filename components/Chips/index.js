import PropTypes from 'prop-types'

// Animations
import { opacityVariants } from '../../animations/search'

// Components
import { motion } from 'framer-motion'
import Chip from '@material-ui/core/Chip'

// Style
import style from './index.module.css'

const Chips = function ({ items, onClick }) {
  return items.map((item) => (
    <motion.span key={item} className={style.root} variants={opacityVariants}>
      <Chip
        className={style.chip}
        variant="outlined"
        color="secondary"
        label={item}
        data-value={item}
        onClick={onClick}
      />
    </motion.span>
  ))
}

Chips.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
}

export default Chips

import PropTypes from 'prop-types'

// Animations
import { drinkTileVariants } from '../../animations/search'

// Styles
import style from './index.module.css'

// Components
import { motion } from 'framer-motion'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import SVGIcon from '../SVGIcon'

// Hooks
import { useCallback } from 'react'

const DrinkTile = function ({
  title,
  thumb,
  id,
  onClickInfo,
  onClickAdd,
  ...props
}) {
  const clickInfoHandler = useCallback(() => {
    onClickInfo(id)
  }, [id, onClickInfo])

  const clickAddHandler = useCallback(() => {
    onClickAdd(id)
  }, [id, onClickAdd])

  return (
    <GridListTile cols={3} {...props}>
      <motion.div variants={drinkTileVariants}>
        <img src={thumb} alt={title} className={style.image} />
        <GridListTileBar
          title={title}
          actionIcon={[
            <IconButton
              key="info"
              aria-label={`info about ${title}`}
              onClick={clickInfoHandler}
            >
              <SVGIcon icon="/icons/info.svg" alt="Info" />
            </IconButton>,
            <IconButton
              key="add"
              aria-label={`order ${title}`}
              onClick={clickAddHandler}
            >
              <SVGIcon icon="/icons/add.svg" alt="Order" />
            </IconButton>,
          ]}
        />
      </motion.div>
    </GridListTile>
  )
}

DrinkTile.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickInfo: PropTypes.func,
  onClickAdd: PropTypes.func,
}

export default DrinkTile

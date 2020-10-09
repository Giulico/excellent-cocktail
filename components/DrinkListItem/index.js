import PropTypes from 'prop-types'

// Styles
import style from './index.module.css'

// Components
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import Fab from '@material-ui/core/Fab'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'

// Hooks & HOC
import { useCallback } from 'react'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

const DrinkListItem = function ({
  width,
  cocktail,
  onAddClick,
  onRemoveClick,
}) {
  const addHandler = useCallback(() => {
    onAddClick(cocktail)
  }, [cocktail, onAddClick])

  const removeHandler = useCallback(() => {
    onRemoveClick(cocktail)
  }, [cocktail, onRemoveClick])

  return (
    <ListItem key={cocktail.name} className={style.root}>
      {isWidthUp('sm', width) && (
        <ListItemAvatar className={style.avatarlist}>
          <AvatarGroup max={4}>
            {Array.from(Array(cocktail.quantity), (v, index) => (
              <Avatar
                key={`${cocktail.name}-${index}`}
                alt={cocktail.name}
                src={cocktail.thumb}
              />
            ))}
          </AvatarGroup>
        </ListItemAvatar>
      )}
      <ListItemText primary={cocktail.name} className={style.text} />
      <ListItemSecondaryAction>
        <Fab
          className={style.fab}
          color="secondary"
          aria-label="remove"
          onClick={removeHandler}
        >
          -
        </Fab>
        <Fab className={style.fab} disabled>
          {cocktail.quantity}
        </Fab>
        <Fab
          className={style.fab}
          color="primary"
          aria-label="add"
          onClick={addHandler}
        >
          +
        </Fab>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

DrinkListItem.propTypes = {
  width: PropTypes.string.isRequired,
  cocktail: PropTypes.shape(),
  onAddClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
}

export default withWidth()(DrinkListItem)

import PropTypes from 'prop-types'

// Components
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const DrinkDialogContent = function ({ cocktail }) {
  return (
    <>
      <DialogTitle id="cocktail-info-title">{cocktail.name || ''}</DialogTitle>
      <DialogContent dividers={false}>
        {cocktail.name && (
          <DialogContentText
            component="div"
            id="cocktail-info-dialog"
            tabIndex={-1}
          >
            <Box mb={4}>
              <Typography variant="overline" display="block" gutterBottom>
                Characteristics
              </Typography>
              <Chip variant="outlined" label={cocktail.glass} color="primary" />
              &nbsp;
              {cocktail.isAlcoholic && (
                <Chip variant="outlined" label="Alcoholic" color="secondary" />
              )}
            </Box>
            <Box mb={4}>
              <Typography variant="overline" display="block" gutterBottom>
                Instructions
              </Typography>
              <Typography paragraph>{cocktail.instructions || ''}</Typography>
            </Box>
            <Typography variant="overline" display="block">
              Ingredients
            </Typography>
            <List>
              {cocktail.ingredients.map((ingredient, index) => (
                <ListItem dense key={index}>
                  <ListItemText
                    primary={`${ingredient} (${cocktail.measurements[index]})`}
                  />
                </ListItem>
              ))}
            </List>
          </DialogContentText>
        )}
      </DialogContent>
    </>
  )
}

DrinkDialogContent.propTypes = {
  cocktail: PropTypes.shape().isRequired,
}

export default DrinkDialogContent

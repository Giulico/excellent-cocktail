import { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

// Consts
import { SET_INGREDIENT, RESET_INGREDIENT, ADD_COCKTAIL } from '../const'

// Utils
import { getCocktails } from '../utils/api'
import {
  uniqueIngredientsFromCocktails,
  randomIngredients,
} from '../utils/cocktails'

// Animations
import * as animation from '../animations/search'

// Hooks
import { useState } from 'react'
import { useStore } from 'redhooks'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import useFilter from '../hooks/useFilter'

// Components
import { motion } from 'framer-motion'
import Alert from '@material-ui/lab/Alert'
import Autocomplete from '../components/Autocomplete'
import Button from '@material-ui/core/Button'
import Chips from '../components/Chips'
import Container from '@material-ui/core/Container'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DrinkTile from '../components/DrinkTile'
import DrinkDialogContent from '../components/DrinkDialogContent'
import GridList from '@material-ui/core/GridList'
import Head from 'next/head'
import Header from '../components/Header'
import Snackbar from '@material-ui/core/Snackbar'
import Typography from '@material-ui/core/Typography'

export async function getStaticProps() {
  const cocktails = await getCocktails()
  return {
    props: {
      cocktails,
    },
  }
}

const Search = function ({ cocktails = [], width }) {
  const {
    dispatch,
    state: { ingredient },
  } = useStore()
  const [state, setState] = useState({
    isAlertOpen: false,
    isDialogOpen: false,
    dialogContent: {},
  })

  const ingredients = useMemo(() => uniqueIngredientsFromCocktails(cocktails), [
    cocktails,
  ])

  const ingredientCriteria = useCallback(
    (item) => item.ingredients.includes(ingredient),
    [ingredient]
  )

  const { filteredItems: filteredCocktails } = useFilter({
    items: cocktails,
    criteria: ingredientCriteria,
  })

  const selectedIngredients = useMemo(
    () => randomIngredients(ingredients, 10),
    [ingredients]
  )

  const suggestionClickHandler = useCallback(
    (e) => {
      const newIngredient = e.currentTarget.getAttribute('data-value')
      dispatch({ type: SET_INGREDIENT, payload: newIngredient })
    },
    [dispatch]
  )

  const ingredientChangeHandler = useCallback(
    (e, newIngredient) => {
      newIngredient
        ? dispatch({ type: SET_INGREDIENT, payload: newIngredient })
        : dispatch({ type: RESET_INGREDIENT })
    },
    [dispatch]
  )

  const dialogOpenHandler = useCallback(
    (drinkId) => {
      setState({
        ...state,
        isDialogOpen: true,
        dialogContent: cocktails.find((cocktail) => cocktail.id === drinkId),
      })
    },
    [cocktails, state]
  )

  const addDrinkToOrder = useCallback(
    (drinkId) => {
      dispatch({
        type: ADD_COCKTAIL,
        payload: cocktails.find((cocktail) => cocktail.id === drinkId),
      })
      setState({ ...state, isAlertOpen: true })
    },
    [cocktails, dispatch, state]
  )

  const dialogCloseHandler = useCallback(
    (event, reason) => {
      if (reason === 'clickaway') {
        return
      }
      setState({ ...state, isAlertOpen: false })
    },
    [state]
  )

  const handleDialogClose = useCallback(() => {
    setState({ ...state, isDialogOpen: false })
  }, [state])

  const getGridListCols = () => {
    if (isWidthUp('md', width)) {
      return 3
    }

    if (isWidthUp('sm', width)) {
      return 2
    }

    return 1
  }

  return (
    <motion.div initial="exit" animate="enter" exit="exit">
      <Container maxWidth="md">
        <Head>
          <title>Choose an ingredient</title>
        </Head>

        <Header />

        <main>
          <motion.div variants={animation.titleVariants}>
            <Typography variant="h2" component="h1">
              Today I feel like...
            </Typography>
          </motion.div>
          <motion.div variants={animation.searchVariants}>
            <Autocomplete
              label={'Type an ingredient'}
              value={ingredient}
              options={ingredients}
              onChange={ingredientChangeHandler}
            />
          </motion.div>
          {filteredCocktails.length ? (
            <motion.div
              initial="exit"
              animate="enter"
              exit="exit"
              variants={animation.drinksVariants}
            >
              <GridList cols={getGridListCols()} cellHeight={280}>
                {filteredCocktails.map((item) => (
                  <DrinkTile
                    key={item.name}
                    id={item.id}
                    title={item.name}
                    thumb={item.thumb}
                    onClickInfo={dialogOpenHandler}
                    onClickAdd={addDrinkToOrder}
                  />
                ))}
              </GridList>
            </motion.div>
          ) : (
            <>
              <motion.div variants={animation.subtitleVariants}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Looking for inspiration? Others have chosen
                </Typography>
              </motion.div>
              <motion.div
                initial="exit"
                animate="enter"
                exit="exit"
                variants={animation.chipsVariants}
              >
                <Chips
                  items={selectedIngredients}
                  onClick={suggestionClickHandler}
                />
              </motion.div>
            </>
          )}

          <Snackbar
            open={state.isAlertOpen}
            autoHideDuration={5000}
            onClose={dialogCloseHandler}
          >
            <Alert
              onClose={dialogCloseHandler}
              variant="filled"
              severity="success"
            >
              Good choice, thank you!
            </Alert>
          </Snackbar>

          <Dialog
            open={state.isDialogOpen}
            onClose={handleDialogClose}
            scroll="body"
            aria-labelledby="cocktail-info-title"
            aria-describedby="cocktail-info-dialog"
          >
            <DrinkDialogContent cocktail={state.dialogContent} />
            <DialogActions>
              <Button onClick={handleDialogClose} color="secondary">
                Close
              </Button>
              <Button
                onClick={() => {
                  addDrinkToOrder(state.dialogContent.id)
                }}
                color="primary"
              >
                Order
              </Button>
            </DialogActions>
          </Dialog>
        </main>
      </Container>
    </motion.div>
  )
}

Search.propTypes = {
  cocktails: PropTypes.array.isRequired,
  width: PropTypes.string.isRequired,
}

export default withWidth()(Search)

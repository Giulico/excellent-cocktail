// Consts
import { ADD_COCKTAIL, REMOVE_COCKTAIL } from '../const'

// Animations
import * as animation from '../animations/overview'

// Components
import { motion } from 'framer-motion'
import Alert from '@material-ui/lab/Alert'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import DrinkListItem from '../components/DrinkListItem'
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useStore } from 'redhooks'

const Overview = function () {
  const router = useRouter()
  const {
    dispatch,
    state: { order },
  } = useStore()

  const confirmClickHandler = useCallback(() => {
    // Submit handler
    // ...

    // Redirect to the thankyou page
    router.push('/thankyou')
  }, [router])

  const addHandler = useCallback(
    (cocktail) => {
      dispatch({ type: ADD_COCKTAIL, payload: cocktail })
    },
    [dispatch]
  )

  const removeHandler = useCallback(
    (cocktail) => {
      dispatch({ type: REMOVE_COCKTAIL, payload: cocktail })
    },
    [dispatch]
  )

  return (
    <Container maxWidth="md">
      <Head>
        <title>Order overview</title>
      </Head>

      <Header />

      <main>
        <motion.div
          initial="exit"
          animate="enter"
          exit="exit"
          variants={animation.parentVariants}
        >
          <motion.div variants={animation.topBottomVariants}>
            <Box my={4}>
              <Link href="/search">&larr; Add more drinks</Link>
            </Box>
          </motion.div>

          <motion.div variants={animation.topBottomVariants}>
            <Typography variant="h2" component="h1">
              We&apos;re almost there!
            </Typography>
          </motion.div>
          <motion.div variants={animation.topBottomVariants}>
            <Typography variant="h4" component="p" gutterBottom>
              please review your order and confirm
            </Typography>
          </motion.div>

          <motion.div variants={animation.listVariants}>
            {order.length ? (
              <List>
                {order.map((cocktail) => {
                  return (
                    <DrinkListItem
                      key={cocktail.name}
                      onRemoveClick={removeHandler}
                      onAddClick={addHandler}
                      cocktail={cocktail}
                    />
                  )
                })}
              </List>
            ) : (
              <Alert severity="warning">
                There is no drink here.{' '}
                <strong>
                  <Link href="/search">Choose a drink</Link>
                </strong>{' '}
                to continue.
              </Alert>
            )}
          </motion.div>

          <Box my={4} mx="auto" align="right">
            <motion.div variants={animation.bottomTopVariants}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={confirmClickHandler}
                disabled={order.length === 0}
              >
                Confirm
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </main>
    </Container>
  )
}

export default Overview

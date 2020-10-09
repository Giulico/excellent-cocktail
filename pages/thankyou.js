// Consts
import { RESET_INGREDIENT, RESET_ORDER } from '../const'

// Animations
import * as animation from '../animations/thankyou'

// Components
import { motion } from 'framer-motion'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Head from 'next/head'
import Thumb from '../components/Thumb'
import Typography from '@material-ui/core/Typography'

// Hooks
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from 'redhooks'

const Thankyou = function () {
  const router = useRouter()
  const { dispatch } = useStore()

  useEffect(() => {
    // TODO: Remove setTimeout and use some callback from Framer Motion
    const cleanStore = setTimeout(() => {
      // Clean store
      dispatch({ type: RESET_INGREDIENT })
      dispatch({ type: RESET_ORDER })
    }, 3000)

    return () => {
      clearTimeout(cleanStore)
    }
  }, [dispatch])

  const restartClickHandler = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <Container maxWidth="md">
      <Head>
        <title>Thank you</title>
      </Head>

      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={animation.parentVariants}
      >
        <Box component="main" align="center" mt={4}>
          <motion.div variants={animation.topBottomVariants}>
            <Typography variant="h2" component="h1">
              Thank you
            </Typography>
            <Typography variant="h4" component="p" gutterBottom>
              We&apos;re preparing your cocktail
            </Typography>
          </motion.div>

          <motion.div variants={animation.scaleVariants}>
            <Thumb image="/images/bartender-2.jpg" alt="Bartender" />
          </motion.div>

          <motion.div variants={animation.bottomTopVariants}>
            <Button
              variant="outlined"
              color="primary"
              onClick={restartClickHandler}
            >
              Start a new order
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  )
}

export default Thankyou

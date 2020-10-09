// Animations
import * as animation from '../animations'

// Components
import { motion } from 'framer-motion'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Thumb from '../components/Thumb'
import Box from '@material-ui/core/Box'

// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/router'

const Home = function () {
  const router = useRouter()

  const continueClickHandler = useCallback(() => {
    router.push('/search')
  }, [router])

  return (
    <Container maxWidth="md">
      <Head>
        <title>Excellent Cocktails</title>
      </Head>

      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={animation.parentTopVariants}
      >
        <Box component="main" align="center" mt={4}>
          <motion.div variants={animation.topBottomVariants}>
            <Typography variant="h2" component="h1">
              Welcome
            </Typography>
          </motion.div>
          <motion.div variants={animation.topBottomVariants}>
            <Typography variant="h4" component="p" gutterBottom>
              please sit, it&apos;s been a long day...
            </Typography>
          </motion.div>

          <motion.div variants={animation.scaleVariants}>
            <Thumb image="/images/bartender-1.jpg" alt="Bartender" />
          </motion.div>

          <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            variants={animation.parentBottomVariants}
          >
            <motion.div variants={animation.bottomTopVariants}>
              <Typography
                variant="overline"
                display="block"
                color="textSecondary"
              >
                1.
              </Typography>
              <Typography paragraph>Think about a tasty ingredient</Typography>
            </motion.div>
            <motion.div variants={animation.bottomTopVariants}>
              <Typography
                variant="overline"
                display="block"
                color="textSecondary"
              >
                2.
              </Typography>
              <Typography paragraph>Choose a cocktail from the list</Typography>
            </motion.div>
            <motion.div variants={animation.bottomTopVariants}>
              <Typography
                variant="overline"
                display="block"
                color="textSecondary"
              >
                3.
              </Typography>
              <Typography paragraph>
                Wait a couple of minutes, we&apos;ll serve you at the table
              </Typography>
            </motion.div>

            <Box mt={4}>
              <motion.div variants={animation.bottomTopVariants}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={continueClickHandler}
                  size="large"
                >
                  Let&apos;s choose a dink!
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  )
}

export default Home

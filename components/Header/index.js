// Animations
import * as animation from '../../animations/search'

// Hooks
import { useCallback } from 'react'
import { useStore } from 'redhooks'

// Components
import { motion } from 'framer-motion'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import SVGIcon from '../SVGIcon'

// Hooks
import { useRouter } from 'next/router'

// Styles
import style from './index.module.css'

const Header = function () {
  const router = useRouter()
  const {
    state: { order },
  } = useStore()

  const overviewClickHandler = useCallback(() => {
    router.push('/overview')
  }, [router])

  const onboardingClickHandler = useCallback(() => {
    router.push('/')
  }, [router])

  const cocktailCounter = order.reduce((prev, curr) => prev + curr.quantity, 0)

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className={style.toolbar}>
        <motion.div variants={animation.orderVariants}>
          <IconButton aria-label="onboarding" onClick={onboardingClickHandler}>
            <SVGIcon icon="/icons/question.svg" alt="Onboarding" />
          </IconButton>
          <IconButton aria-label="cart" onClick={overviewClickHandler}>
            <Badge
              badgeContent={cocktailCounter}
              color="secondary"
              className={style.badge}
            >
              <SVGIcon icon="/icons/order.svg" alt="Order" />
            </Badge>
          </IconButton>
        </motion.div>
      </Toolbar>
    </AppBar>
  )
}

export default Header

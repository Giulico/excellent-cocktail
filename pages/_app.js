import PropTypes from 'prop-types'
import store from '../store'

// Styles
import '../styles/globals.css'

// COmponents
import Provider from 'redhooks'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'

const colors = {
  'Ao English': '#26770D',
  'Old Burgundy': '#3D2C2A',
  'Deep Chestnut': '#B53F3F',
  'Unbleached Silk': '#f1d3c8',
  'Rifle Green': '#475134',
}

let theme = createMuiTheme({
  palette: {
    primary: {
      main: colors['Ao English'],
    },
    secondary: {
      main: colors['Old Burgundy'],
    },
  },
  spacing: 8,
})

// Responsive typography (default configuration)
theme = responsiveFontSizes(theme)

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CssBaseline />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Provider>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  pageProps: PropTypes.shape(),
  router: PropTypes.shape(),
}

export default MyApp

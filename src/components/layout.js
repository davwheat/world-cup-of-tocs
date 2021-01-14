import React from 'react'
import PropTypes from 'prop-types'

import '@fontsource/jost/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'
import '../css/baseline.less'

import ErrorBoundary from './ErrorBoundary'
import Footer from './footer'

import Twemoji from 'react-twemoji'

const Layout = ({ children }) => {
  return (
    <ErrorBoundary>
      <Twemoji options={{ className: 'twemoji' }}>
        <main>{children}</main>
        <Footer />
      </Twemoji>
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

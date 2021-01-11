import React from 'react'
import PropTypes from 'prop-types'

import '@fontsource/jost/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'

import '../css/baseline.less'
import ErrorBoundary from './ErrorBoundary'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <ErrorBoundary>
      <main>
        <Header />
        {children}
      </main>
      <Footer />
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

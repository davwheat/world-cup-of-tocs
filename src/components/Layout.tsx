import React from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from './ErrorBoundary'
import Footer from './Footer'

import '@fontsource/jost/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'

import '../css/baseline.less'

const Layout: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

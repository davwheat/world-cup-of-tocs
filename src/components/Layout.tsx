import React from 'react'
import PropTypes from 'prop-types'

import '@fontsource/jost/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'
import '../css/baseline.less'

import ErrorBoundary from './ErrorBoundary'
import Footer from './Footer'

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

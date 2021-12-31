import React from 'react'
import PropTypes from 'prop-types'

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

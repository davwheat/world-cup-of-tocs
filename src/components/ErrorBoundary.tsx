import React from 'react'

import { withStyles, WithStyles } from '@material-ui/styles'

import { Paragraph, Shout } from '../typography'
import Link from './Link'

type ErrorBoundaryState = {
  hasError: boolean
}

type Props = WithStyles<typeof useStyles>

const useStyles = () => ({
  root: {
    padding: 32,
    maxWidth: 900,
    margin: 'auto',
  },
})

class ErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    if (process.env.NODE_ENV !== 'development') {
      console.error(error)

      return { hasError: true }
    }
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   // logErrorToMyService(error, errorInfo)
  // }

  render() {
    const { classes } = this.props

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <main className={classes.root}>
          <Shout>Uh oh, something went wrong.</Shout>
          <Paragraph bold>It's not you, it's us.</Paragraph>
          <Paragraph>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            Please try <Link onClick={() => window.location.reload()}>refreshing the page</Link>.
          </Paragraph>
          <Paragraph>
            Still having issues? Let me know <Link url="https://twitter.com/davwheat_">on Twitter</Link>.
          </Paragraph>
        </main>
      )
    }

    return this.props.children
  }
}

export default withStyles(useStyles)(ErrorBoundary)

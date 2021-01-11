import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    fontSize: 48,
    paddingBottom: 24,
    letterSpacing: 0.3,
    '@media (max-width: 767px)': {
      fontSize: 36,
      letterSpacing: 0,
    },
    '@media (max-width: 599px)': {
      fontSize: 28,
    },
  },
  noPad: {
    paddingBottom: 0,
  },
})

export default function Shout({ children, className, noPadding }) {
  const classes = useStyles()

  return <h1 className={clsx(classes.root, noPadding && classes.noPad, className)}>{children}</h1>
}

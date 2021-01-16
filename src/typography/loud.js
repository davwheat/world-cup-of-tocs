import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    fontSize: 36,
    paddingBottom: 24,
    letterSpacing: 0.3,
    '@media (max-width: 767px)': {
      fontSize: 28,
      letterSpacing: 0,
    },
    '@media (max-width: 599px)': {
      fontSize: 24,
    },
  },
  noPad: {
    paddingBottom: 0,
  },
  center: {
    textAlign: 'center',
  },
})

export default function Loud({ children, className, noPadding, center }) {
  const classes = useStyles()

  return <h1 className={clsx(classes.root, noPadding && classes.noPad, center && classes.center, className)}>{children}</h1>
}

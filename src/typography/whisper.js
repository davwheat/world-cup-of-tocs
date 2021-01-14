import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    paddingBottom: 6,
    lineHeight: 1.2,
    fontSize: 16,
  },
  noPad: {
    paddingBottom: 0,
  },
  bold: {
    fontWeight: 600,
  },
  centered: {
    textAlign: 'center',
  },
})

export default function Whisper({ children, className, noPadding, bold, center }) {
  const classes = useStyles()

  const props = {
    className: clsx(classes.root, noPadding && classes.noPad, bold && classes.bold, center && classes.centered, className),
  }

  return <p {...props}>{children}</p>
}

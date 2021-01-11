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
})

export default function Whisper({ children, className, noPadding }) {
  const classes = useStyles()

  return <p className={clsx(classes.root, noPadding && classes.noPad, className)}>{children}</p>
}

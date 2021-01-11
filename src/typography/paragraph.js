import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles({
  root: {
    paddingBottom: 12,
    lineHeight: 1.4,
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

export default function Paragraph({ children, className, noPadding, inline, bold, center }) {
  const classes = useStyles()

  const props = {
    className: clsx(classes.root, noPadding && classes.noPad, bold && classes.bold, center && classes.centered, className),
  }

  if (inline) {
    return <span {...props}>{children}</span>
  } else {
    return <p {...props}>{children}</p>
  }
}

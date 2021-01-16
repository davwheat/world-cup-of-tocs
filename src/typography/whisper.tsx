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
  centred: {
    textAlign: 'center',
  },
})

type Props = {
  /**
   * Extra classes to add in addition to those supplied by this component
   * @default undefined
   */
  className?: string
  /**
   * Should remove top and bottom padding
   * @default false
   */
  noPadding?: boolean
  /**
   * Should paragraph be centred
   * @default false
   */
  center?: boolean
  /**
   * Should text be bold
   * @default false
   */
  bold?: boolean
}

const Whisper: React.FC<Props> = ({ children, className, noPadding, bold, center }) => {
  const classes = useStyles()

  const props = {
    className: clsx(classes.root, noPadding && classes.noPad, bold && classes.bold, center && classes.centred, className),
  }

  return <p {...props}>{children}</p>
}

export default Whisper

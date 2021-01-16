import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '0 32px',
    alignItems: 'center',
    flexDirection: 'column',
  },
  space: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  inner: {
    maxWidth: 900,
    width: '100%',
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
})

type Props = {
  noSpacing?: boolean
  className?: string
  noMaxWidth?: boolean
  innerClassName?: string
}

const BodySection: React.FC<Props> = ({ children, noSpacing, className, noMaxWidth, innerClassName, ...props }) => {
  const classes = useStyles()

  return (
    <section className={clsx(classes.root, !noSpacing && classes.space, className)} {...props}>
      <div className={clsx(classes.inner, noMaxWidth && classes.noMaxWidth, innerClassName)}>{children}</div>
    </section>
  )
}

export default BodySection

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'
import { Colors } from '../data'
import { Paragraph } from '../typography'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '12px 16px',
    background: Colors.dark,
    color: Colors.offWhite,
    fontSize: 18,
  },
  afterHeading: {
    marginTop: -6,
  },
  title: {
    paddingBottom: 4,
  },
  padBottom: {
    marginBottom: 16,
  },
  alternateBackground: {
    background: Colors.primaryDark,
  },
})

export default function AlertBanner({ title, message, noPadding, afterHeading, alternateColor, innerClassName }) {
  const classes = useStyles()

  return (
    <section
      className={clsx(classes.root, !noPadding && classes.padBottom, afterHeading && classes.afterHeading, alternateColor && classes.alternateBackground)}
    >
      <div className={innerClassName}>
        <Paragraph className={classes.title} bold>
          {title}
        </Paragraph>
        <Paragraph noPadding>{message}</Paragraph>
      </div>
    </section>
  )
}

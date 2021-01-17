import React from 'react'

import { Paragraph, Whisper } from '../typography'
import BulletSeparator from './BulletSeparator'
import Link from './Link'
import BodySection from './BodySection'
import { makeStyles } from '@material-ui/styles'

import { version } from '../../package.json'

const useStyles = makeStyles({
  contactLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 24,
    paddingBottom: 16,
    '& > div > p': {
      textAlign: 'center',
      paddingBottom: 4,
    },
  },
})

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <BodySection>
      <Whisper bold>
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by David Wheatley & Kishan Singh - &copy; {new Date().getFullYear()} All Rights Reserved
      </Whisper>

      <Whisper>All train operating company names listed above are trademarks of their respective owners.</Whisper>

      <Whisper>
        Website version {version}
        <BulletSeparator />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link onClick={() => window.cookiehub.openSettings()}>Cookie settings</Link>
      </Whisper>

      <div className={classes.contactLinks}>
        <div>
          <Paragraph noPadding>Find David</Paragraph>

          <Whisper>
            <Link target="_blank" url="https://github.com/davwheat">
              GitHub
            </Link>

            <BulletSeparator />

            <Link target="_blank" url="https://twitter.com/davwheat_">
              Twitter
            </Link>

            <BulletSeparator />

            <Link target="_blank" url="mailto:hi@davwheat.dev">
              Email
            </Link>
          </Whisper>
        </div>

        <div>
          <Paragraph noPadding>Find Kishan</Paragraph>

          <Whisper>
            <Link target="_blank" url="https://github.com/Gum-Joe">
              GitHub
            </Link>

            <BulletSeparator />

            <Link target="_blank" url="https://twitter.com/official_gumjoe">
              Twitter
            </Link>

            <BulletSeparator />

            <Link target="_blank" url="mailto:jaskishansaran@gmail.com">
              Email
            </Link>
          </Whisper>
        </div>
      </div>
    </BodySection>
  )
}

export default Footer

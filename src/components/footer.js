import React from 'react'

import { Whisper } from '../typography'
import BulletSeparator from './BulletSeparator'
import Link from './Link'
import BodySection from './section'

import { version } from '../../package.json'

export default function Footer() {
  return (
    <BodySection>
      <Whisper bold>
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by David Wheatley & Kishan Singh - &copy; {new Date().getFullYear()} All Rights Reserved
      </Whisper>

      <Whisper>
        <Paragraph inline>Find David here:</Paragraph>

        <Link target="_blank" url="https://github.com/davwheat">
          GitHub
        </Link>

        <BulletSeparator />

        <Link target="_blank" url="https://twitter.com/davwheat_">
          Twitter
        </Link>

        <BulletSeparator />

        <Link target="_blank" url="mailto:hi@davwheat.dev">
          Email me
        </Link>
      </Whisper>

      <Whisper>
        <Paragraph inline>Find Kishan here:</Paragraph>

        <Link target="_blank" url="https://github.com/Gum-Joe">
          GitHub
        </Link>

        <BulletSeparator />

        <Link target="_blank" url="https://twitter.com/official_gumjoe">
          Twitter
        </Link>

        <BulletSeparator />

        <Link target="_blank" url="mailto:jaskishansaran@gmail.com">
          Email me
        </Link>
      </Whisper>

      <Whisper>
        <Link onClick={() => window.cookiehub.openSettings()}>Cookie settings</Link>
      </Whisper>

      <Whisper>
        {/* Version {version} - last updated {buildDateString} */}
        Website version {version}
      </Whisper>
    </BodySection>
  )
}

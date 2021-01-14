import React from 'react'

import { Paragraph, Whisper } from '../typography'
import BulletSeparator from './BulletSeparator'
import Link from './Link'
import BodySection from './section'

import { version } from '../../package.json'

export default function Footer() {
  return (
    <BodySection>
      <Paragraph>
        Made with <span>❤️</span> by David Wheatley - &copy; {new Date().getFullYear()} All Rights Reserved
      </Paragraph>
      <Paragraph>
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
      </Paragraph>
      <Whisper>
        {/* Version {version} - last updated {buildDateString} */}
        Website version {version}
      </Whisper>
    </BodySection>
  )
}

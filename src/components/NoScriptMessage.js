import React from 'react'
import AlertBanner from './AlertBanner'

export default function NoScriptMessage() {
  return (
    <noscript>
      <AlertBanner title="Error" message="This site requires Javascript to run. Please enable Javascript in your browser to use this site." />
    </noscript>
  )
}

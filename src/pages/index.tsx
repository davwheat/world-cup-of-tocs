import React from 'react'

import isSmallViewport from '../functions/isSmallViewport'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AlertBanner from '../components/AlertBanner'
import BodySection from '../components/BodySection'
import NoScriptMessage from '../components/NoScriptMessage'
import Game from '../components/GameGrid/Game'
import { Megaphone, Paragraph } from '../typography'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO />

      <BodySection>
        <Megaphone>World Cups of Train Operators and lines on the TfL Map</Megaphone>
        <Paragraph>Watch the results for Geoff Marshall's World Cups in real time.</Paragraph>

        <NoScriptMessage />

        {isSmallViewport() && <AlertBanner title="Warning" message="This page is best viewed on a larger device." />}
      </BodySection>

      <Game />
    </Layout>
  )
}

export default IndexPage

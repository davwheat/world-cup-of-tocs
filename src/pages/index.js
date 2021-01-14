import React from 'react'

import isSmallViewport from '../functions/isSmallViewport'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AlertBanner from '../components/AlertBanner'
import BodySection from '../components/section'
import NoScriptMessage from '../components/NoScriptMessage'
import Game from '../components/GameGrid/Game'

import { Megaphone, Paragraph } from '../typography'

const IndexPage = () => {
  return (
    <Layout>
      <SEO />

      <BodySection>
        <Megaphone>World Cup of TOCs</Megaphone>
        <Paragraph>Watch the results for Geoff Marshall's World Cup of TOCs in real time.</Paragraph>

        <NoScriptMessage />

        {isSmallViewport() && <AlertBanner title="Warning" message="This page is best viewed on a larger device." />}
      </BodySection>

      <Game />
    </Layout>
  )
}

export default IndexPage

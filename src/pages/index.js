import React from 'react'

import { makeStyles } from '@material-ui/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Paragraph } from '../typography'
import BodySection from '../components/section'
import isTouchDevice from '../functions/isTouchDevice'
import AlertBanner from '../components/AlertBanner'

const useStyles = makeStyles({
  wider: {
    maxWidth: 1200,
  },
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO />

      <BodySection>
        <Paragraph>Watch the results for Geoff Marshall's World Cup of Tube Lines in real time.</Paragraph>

        {(isTouchDevice() || true) && <AlertBanner title="Warning" message="This page is best viewed on a laptop or desktop." />}
      </BodySection>
    </Layout>
  )
}

export default IndexPage

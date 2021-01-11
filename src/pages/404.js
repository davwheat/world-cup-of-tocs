import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Paragraph, Shout } from '../typography'
import Layout from '../components/layout'
import Link from '../components/Link'
import BodySection from '../components/section'
import SEO from '../components/seo'

const useStyles = makeStyles({
  heading: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Page not found" />

      <Shout noPadding className={classes.heading}>
        World Cup of TOCs
      </Shout>

      <BodySection>
        <Shout>This page doesn't exist</Shout>

        <Paragraph>
          <Link internal className={classes.linkOrBtn} url="/">
            Go to home page
          </Link>
        </Paragraph>
      </BodySection>
    </Layout>
  )
}

export default IndexPage

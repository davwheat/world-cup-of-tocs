import React from 'react'
import PropTypes from 'prop-types'
import { Meta, Title } from 'react-head'

function SEO({ title }) {
  const metaDescription = `Track Geoff Marshall's World Cup of TOCs live!`
  const siteName = 'World Cup of TOCs'

  if (typeof window === 'undefined') {
    return null
  }

  return (
    <>
      <Title>{title ? `${title} | ${siteName}` : siteName}</Title>
      <Meta name="description">{metaDescription}</Meta>
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
}

export default SEO

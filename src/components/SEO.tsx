import React from 'react'
import { Meta, Title } from 'react-head'
import packageJson from '../../package.json'
const { description } = packageJson

interface Props {
  /**
   * Page title
   */
  title?: string
}

const SEO: React.FC<Props> = ({ title }) => {
  const metaDescription = description
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

export default SEO

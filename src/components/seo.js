import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

function SEO({
  description: descriptionProps,
  lang = 'en',
  meta = [],
  keywords = [],
  title: titleProps,
}) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          siteName
          siteRoot
        }
      }
    }
  `)

  const title = titleProps || site.siteMetadata.title
  const description = descriptionProps || site.siteMetadata.description
  const { siteName, siteRoot } = site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:url`,
          content: `siteRoot`,
        },
        {
          name: `og:site_name`,
          content: siteName,
        },
        {
          name: `og:locale`,
          content: 'en_US',
        },
        {
          name: `ia:markup_url`,
          content: siteRoot,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${title}`}
    />
  )
}

export default SEO

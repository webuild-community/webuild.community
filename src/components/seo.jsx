import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({
  title: titleProps = 'WeBuild Community - Vietnam Alliance hub of Developers & Makers',
  description: descriptionProps = 'WeBuild Community is a platform that connects developers in Vietnam, where they can share their knowledge and experience, while working, learning, and building cool stuffs together.',
  lang = 'en',
  meta = [],
  keywords = ['WeBuild', 'commutity', 'connect', 'developer', 'Vietnam'],
  path = '',
  ogImagePath = withPrefix(`/img/webuild-og.jpg`),
  fbAppId = '',
  fbPages = ''
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
  `);

  const title = titleProps || site.siteMetadata.title;
  const description = descriptionProps || site.siteMetadata.description;
  const { siteName, siteRoot } = site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `og:url`,
          content: `${siteRoot}${path}`
        },
        {
          name: `og:site_name`,
          content: siteName
        },
        {
          name: `og:image`,
          content: ogImagePath
        },
        {
          name: `og:image:type`,
          content: 'image/png'
        },
        {
          name: `og:image:width`,
          content: '1200'
        },
        {
          name: `og:image:height`,
          content: '628'
        },
        {
          name: `og:image:alt`,
          content: title
        },
        {
          name: `og:locale`,
          content: 'vi_VN'
        },
        {
          name: `fb:app_id`,
          content: fbAppId
        },
        {
          name: `fb:pages`,
          content: fbPages
        },
        {
          name: `ia:markup_url`,
          content: siteRoot
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
      title={title}
    />
  );
}

export default SEO;

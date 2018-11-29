import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../assets/favicon.png"

function SEO({
  siteName,
  title,
  description,
  canonicalUrl,
  social,
  slug,
  image,
}) {
  const url = `${canonicalUrl}/${slug}`
  const pageTitle = title ? `${title} | ${siteName}` : siteName

  // SchemaOrg
  const schema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
    },
  ]

  return (
    <Helmet>
      {/* General tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="shortcut icon" type="image/png" href={favicon} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={social.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

SEO.propTypes = {
  siteName: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  social: PropTypes.shape({
    fbAppId: PropTypes.string,
    twitter: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  slug: "",
  image: "",
  title: "",
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            image
            social {
              twitter
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, ...siteMetadata },
      },
    }) => <SEO {...siteMetadata} siteName={title} {...props} />}
  />
)

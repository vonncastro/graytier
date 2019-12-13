// Load environment variables
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Gray Tier Technologies, LLC`,
    author: `Gray Tier`,
    description: `Gray Tier is an advanced consulting company that focuses on, developing, technical solutions to the toughest cyber security challenges faced by both enterprise and government customers.`,
    siteUrl: `https://graytier.netlify.com/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID || '7qg6ezg7',
        dataset: process.env.SANITY_DATASET || 'production',
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-66848920-1`,
        head: true,
        anonymize: true,
        respectDNT: true,
        cookieDomain: `graytier.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `assistant\:300,400,600,700`,
          `bree serif`, // you can also specify font weights and styles
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allSanityPost } }) => {
              return allSanityPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.excerpt,
                  date: edge.node.publishedAt,
                  url: site.siteMetadata.siteUrl + edge.node.slug.current,
                  guid: site.siteMetadata.siteUrl + edge.node.slug.current,
                  custom_elements: [{ 'content:encoded': edge.node.excerpt }],
                })
              })
            },
            query: `
              {
                allSanityPost(
                  filter: { status: { eq: "published" } }
                  sort: { fields: [author____createdAt], order: DESC }
                ) {
                  edges {
                    node {
                      id
                      title
                      excerpt
                      _createdAt
                      publishedAt
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WebriQ Blog`,
        short_name: `WebriQ`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#f7f7f7`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

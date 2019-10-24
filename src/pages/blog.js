import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import marked from 'marked'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allSanityPost.edges

    console.log(this.props)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="container py-5">
          <div className="blog-wrap">
            {posts.map(({ node }) => {
              const title = node.title
              // const serializers = {
              //   types: {
              //     authorReference: ({ node }) => (
              //       <span>
              //         {node.author.firstname} {node.author.lastname}
              //       </span>
              //     ),
              //   },
              // }
              return (
                <div key={node.slug.current} className="mb-4">
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.slug.current}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.publishedAt}</small>
                  <div
                    dangerouslySetInnerHTML={{ __html: marked(node.excerpt) }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allSanityPost(filter: { status: { eq: "published" } }) {
      edges {
        node {
          id
          title
          excerpt
          slug {
            current
          }
          publishedAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

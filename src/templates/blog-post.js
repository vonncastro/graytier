import React from 'react'
import { Link, graphql } from 'gatsby'
import marked from 'marked'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const siteTitle = this.props.data.post.metaTitle
    const { previous, next } = this.props.pageContext
    // const serializers = {
    //   types: {
    //     authorReference: ({ node }) => (
    //       <span>
    //         {post.author.firstname} {post.author.lastname}
    //       </span>
    //     ),
    //   },
    // }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.excerpt} />
        <div className="container pt-5">
          <div className="blog-wrap">
            <h1>{post.title}</h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: 0,
                // marginTop: rhythm(-1),
              }}
            >
              {post.publishedAt}
            </p>
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.originalFilename}
              />
            )}
            <div dangerouslySetInnerHTML={{ __html: marked(post.body) }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />

            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.slug.current} rel="prev">
                    ← {previous.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.slug.current} rel="next">
                    {next.title} →
                  </Link>
                )}
              </li>
            </ul>
            <Link to="/blog">Take Me Home</Link>
            <br />
            <br />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id

      mainImage {
        asset {
          id
          url
          originalFilename
          fluid {
            src
          }
        }
      }
      publishedAt(formatString: "MMMM DD, YYYY")
      categories {
        _id
        title
      }
      title
      slug {
        current
      }
      body
      metaTitle
      metaKeywords
      metaDescription
    }
  }
`

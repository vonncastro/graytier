import React from 'react'
import { Link, graphql } from 'gatsby'
import marked from 'marked'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import { rhythm } from '../utils/typography'

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

        <div className="page-headline">
          <HeroParticles />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <ScrollAnimation animateIn="fadeInDown" duration="2">
                  <h1 className="font-weight-bold">{post.title}</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="1000">
                  <h5 className="pt-3 font-weight-lighter text-white">
                    {post.publishedAt}
                  </h5>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-wrap page-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="text-center">
                  {post.mainImage && (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.originalFilename}
                      className="img-fluid mb-5"
                    />
                  )}
                </div>
                <div dangerouslySetInnerHTML={{ __html: marked(post.body) }} />
                <hr
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />

                <ul className="blog-nav">
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
                <div className="text-center mt-5">
                  <Link className="btn btn-primary" role="button" to="/blog">
                    Back to the Blog
                  </Link>
                </div>
              </div>
            </div>
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

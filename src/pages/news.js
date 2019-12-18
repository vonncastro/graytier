import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import marked from 'marked'

class NewsIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'News'
    const posts = data.allSanityNews.edges

    console.log(this.props)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="page-headline">
          <HeroParticles />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <ScrollAnimation animateIn="fadeInDown" duration="2">
                  <h1 className="font-weight-bold">News</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="1000">
                  <h5 className="pt-3 font-weight-lighter text-white">
                    Latest Stories
                  </h5>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="blog-wrap">
              <div className="row justify-content-center">
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
                    <div className="col-lg-5 mb-4">
                      <ScrollAnimation animateIn="fadeIn" className="h-100">
                        <div className="news post-item h-100">
                          <Link
                            className="m-0 post-link"
                            to={node.slug.current}
                            title="slug"
                          >
                            <h4 className="m-0">{title}</h4>
                          </Link>
                          <span className="small text-uppercase text-muted">
                            {node.publishedAt}
                          </span>
                          <div className="truncate-9 text-muted">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: marked(node.excerpt),
                              }}
                            />
                          </div>
                          <Link
                            className="btn btn-primary btn-sm mt-4 btn-black-transparent"
                            role="button"
                            to={node.slug.current}
                          >
                            Read More
                          </Link>
                        </div>
                      </ScrollAnimation>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NewsIndex

export const newsPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allSanityNews(
      filter: { status: { eq: "published" } }
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          publishedAt(formatString: "MMMM DD, YYYY")
          excerpt
          slug {
            current
          }
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
        }
      }
    }
  }
`

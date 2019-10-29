import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class ThankYouPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Thank you!" />
        <div className="page-content">
          <div className="container text-center">
            <h1 className="text-blue">Thank you!</h1>
            <p>We have received your message and will get back to you soon.</p>
            <Link className="btn btn-primary" role="button" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ThankYouPage

export const thankYouPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

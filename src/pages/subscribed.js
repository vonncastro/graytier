import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class SubscribedPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Thank you!" />
        <div className="page-content">
          <div className="container text-center">
            <h1 className="text-blue">Subscribed!</h1>
            <p>You are now subscribed to our newsletter</p>
            <Link className="btn btn-primary" role="button" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SubscribedPage

export const subscribedPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

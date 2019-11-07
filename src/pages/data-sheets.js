import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import Overview from '../components/overview'

class dataSheetsPage extends React.Component {
  render() {
    const siteTitle = 'Data Sheets'
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div className="page-headline">
          <HeroParticles />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <ScrollAnimation animateIn="fadeInDown" duration="2">
                  <h1 className="font-weight-bold">Data Sheets</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="1000">
                  <h5 className="pt-3 font-weight-lighter text-white">
                    Gray Tier is an advanced security company that focuses on
                    developing technical solutions to the toughest cyber
                    security challenges facing our customers
                  </h5>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <p>Waiting For Content</p>
          </div>
        </div>
        <Overview />
      </Layout>
    )
  }
}

export default dataSheetsPage

export const dataSheetsPageQuery = graphql`
  query dataSheetsPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

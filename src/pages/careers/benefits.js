import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../../components/particles'

class JobBenefits extends React.Component {
  render() {
    const siteTitle = 'Benefits'
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
                  <h1 className="font-weight-bold">Job Postings</h1>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <ScrollAnimation animateIn="fadeIn">
                  <h4 className="pb-4">
                    Benefits list summary is just the beginning:
                  </h4>
                  <ul>
                    <li>Competitive Salary</li>
                    <li>Medical, Dental & Vision</li>
                    <li>Company 401K Matching - Vested Day 1</li>
                    <li>Commuter Benefits</li>
                    <li>
                      Technical Training to keep up with current trends and
                      technologies
                    </li>
                    <li>Attend Security Conferences</li>
                    <li>Directly talk with the founders</li>
                  </ul>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default JobBenefits

export const jobBenefitsQuery = graphql`
  query jobBenefitsQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

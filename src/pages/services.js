import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import Overview from '../components/overview'

import RedTeaming from '../images/red-teaming.png'
import PenetrationTesting from '../images/penetration-testing.png'
import ApplicationTesting from '../images/application-testing.png'
import WebApplicationTesting from '../images/web-application-testing.png'
import OpenSourceIntelligence from '../images/open-source-intelligence.png'
import SocialEngineering from '../images/social-engineering.png'

class ServicesPage extends React.Component {
  render() {
    const siteTitle = 'Services'
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
                  <h1 className="font-weight-bold">Services</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="1000">
                  <h5 className="pt-3 font-weight-lighter text-white">
                    Gray Tier's approach of developing practical applications
                    though the standard system engineering methodologies is our
                    foundation.
                  </h5>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-md-6 col-lg-4 mb-4 props">
                <ScrollAnimation animateIn="fadeIn" className="h-100">
                  <div className="border rounded-0 shadow-lg val-prop">
                    <img
                      src={RedTeaming}
                      alt="Red Teaming"
                      className="img-fluid"
                      width="150px"
                    />
                    <h4 className="font-weight-bold py-3">Red Teaming</h4>
                    <p className="m-0">
                      Our most comprehensive security assessment, combining
                      penetration testing, application security testing, and
                      social engineering
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 props">
                <ScrollAnimation animateIn="fadeIn" className="h-100">
                  <div className="border rounded-0 shadow-lg val-prop">
                    <img
                      src={PenetrationTesting}
                      alt="Penetration Testing"
                      className="img-fluid"
                      width="150px"
                    />
                    <h4 className="font-weight-bold py-3">
                      Penetration Testing
                    </h4>
                    <p className="m-0">
                      Comprehensive risk, vulnerability, and penetration testing
                      intelligence with prioritized risk-rated recommendations
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 props">
                <ScrollAnimation animateIn="fadeIn" className="h-100">
                  <div className="border rounded-0 shadow-lg val-prop">
                    <img
                      src={ApplicationTesting}
                      alt="Application Testing"
                      className="img-fluid"
                      width="150px"
                    />
                    <h4 className="font-weight-bold py-3">
                      Application Testing
                    </h4>
                    <p className="m-0">
                      Our security engineers will test vulnerabilities in your
                      custom or off the shelf applications
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 props">
                <ScrollAnimation animateIn="fadeIn" className="h-100">
                  <div className="border rounded-0 shadow-lg val-prop">
                    <img
                      src={WebApplicationTesting}
                      alt="Web Application Testing"
                      className="img-fluid"
                      width="150px"
                    />
                    <h4 className="font-weight-bold py-3">
                      Web Application Testing
                    </h4>
                    <p className="m-0">
                      Our security engineers will test vulnerabilities in your
                      web, mobile, &amp; cloud applications
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 props">
                <ScrollAnimation animateIn="fadeIn" className="h-100">
                  <div className="border rounded-0 shadow-lg val-prop">
                    <img
                      src={OpenSourceIntelligence}
                      alt="Open Source Intelligence"
                      className="img-fluid"
                      width="150px"
                    />
                    <h4 className="font-weight-bold py-3">
                      Open Source Intelligence
                    </h4>
                    <p className="m-0">
                      Open-source intelligence (OSINT) is intelligence collected
                      from publicly available sources
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 props">
                <ScrollAnimation animateIn="fadeIn" className="h-100">
                  <div className="border rounded-0 shadow-lg val-prop">
                    <img
                      src={SocialEngineering}
                      alt="Social Engineering"
                      className="img-fluid"
                      width="150px"
                    />
                    <h4 className="font-weight-bold py-3">
                      Social Engineering
                    </h4>
                    <p className="m-0">
                      Phishing and phone campaigns to pinpoint your
                      vulnerabilities and promote awareness and education
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <Overview />
      </Layout>
    )
  }
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query servicesPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

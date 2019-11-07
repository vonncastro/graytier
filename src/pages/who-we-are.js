import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import Overview from '../components/overview'

class whoWeArePage extends React.Component {
  render() {
    const siteTitle = 'Who We Are'
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
                  <h1 className="font-weight-bold">Who We Are</h1>
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
        <div className="page-content">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                 <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <h2 className="font-weight-bold">People, Process, and Technology</h2>
                  <div className="h-100">
                    <p className="lead">
                      Gray Tier's technical and professional expertise is the foundation of the services we offer to our clients. We take pride in our developments and contributions to the security community. Our team is most at home focusing on the toughest challenges facing our clients. Whether it is leveraging advanced scientific research and development, providing the most up-to-date relevant training, and/or using our proprietary technologies, Gray Tier is poised to offer cutting edge solutions to our clients.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
             
            </div>
            <div className="row">
               <div className="col-12 text-center">
                 <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <h2 className="font-weight-bold">Prepare Your Business and Stay Compliance Ready With Our Professional Security Services</h2>
                  <div className="h-100 mt-4">
                    <div className="row">
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>Penetration Testing & Assessments</h4>
                            <p className="lead">Pinpoint Attack Patterns to Protect Your Critical Assets</p>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>Incident Response Services</h4>
                            <p className="lead">Resolve Breach Incidents From Detection to Response</p>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>SEIM</h4>
                            <p className="lead">Take the Guesswork Out of Your Response Plan</p>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>Cyber Threat Hunting</h4>
                            <p className="lead">Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                            <p></p>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>Compliance & Strategies</h4>
                            <p className="lead">Meet Regulatory Requirements With Confidence</p>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>Industries</h4>
                            <p className="lead">Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>Financial Services</h4>
                            <p className="lead">Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>Service & Hospitality</h4>
                            <p className="lead">Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4 mb-4">
                        <ScrollAnimation animateIn="fadeInDown">
                          <div className="content text-center">
                            <h4>Federal</h4>
                            <p className="lead">Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                          </div>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <ScrollAnimation animateIn="fadeIn">
                  <div className="content text-center">
                    <img className="img-fluid mb-4" src="/gsa_contract.png" alt="gsa" width={300}/>
                    <h2 className="mb-4">How to Order:</h2>
                    <p className="lead">Federal, state, and local governments can rapidly buy services from Delta Risk by using the following Highly Adaptive Cybersecurity Services (HACS) Special Item Numbers (SIN) on GSA’s IT Schedule 70:</p>
                    
                    <p className="mb-0">SIN 132 45 A: Penetration Testing</p>
                    <p className="mb-0">SIN 132 45B: Incident Response Services</p>
                    <p className="mb-0">SIN 132 45C: Cyber Hunt</p>
                    <p className="mb-0">SIN 132 45D: Risk &amp; Vulnerability Assessments</p>
                    
                    <h4 className="mt-4">Delta Risk also has two additional GSA SINS:</h4>
                    <p className="mb-0">SIN #132-50: Training Services</p>
                    <p>SIN #132-51: Professional Services</p>
                    <p className="mb-5">To learn more about how to order go to <a href="www.gsa.gov/portal/content/198589" target="_blank" rel="noopener noreferrer">www.gsa.gov/portal/content/198589</a></p>
                    <Link className="btn btn-primary" role="button" to="/contact">
                    Contact Us
                  </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <h2 className="mb-4 text-center">Our Customers</h2>
            <div className="row flex-wrap justify-content-between">
              <div className="col-md-2 text-center">
               <ScrollAnimation animateIn="fadeIn">
                  <img src="/dhs_logo_ps2.jpg" alt="dhs logo" width={150}/>
               </ScrollAnimation>
              </div>
              <div className="col-md-2 text-center">
               <ScrollAnimation animateIn="fadeIn">
                  <img src="/dod_logo_ps.jpg" alt="dod logo" width={150}/>
               </ScrollAnimation>
              </div>
              <div className="col-md-2 text-center">
               <ScrollAnimation animateIn="fadeIn">
                  <img src="/usmc_logo_ps.jpg" alt="usmc logo" width={150}/>
               </ScrollAnimation>
              </div>
              <div className="col-md-2 text-center">
               <ScrollAnimation animateIn="fadeIn">
                  <img src="/army_logo_ps.jpg" alt="army logo" width={150}/>
               </ScrollAnimation>
              </div>
              <div className="col-md-2 text-center">
               <ScrollAnimation animateIn="fadeIn">
                  <img src="/usaf_logo_ps.jpg" alt="usaf logo" width={150}/>
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

export default whoWeArePage

export const whoWeArePageQuery = graphql`
  query whoWeArePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

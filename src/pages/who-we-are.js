import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import Overview from '../components/overview'
import Financial from '../images/001-hand.png'
import Hospitality from '../images/002-kindness.png'
import Federal from '../images/003-government.png'

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
                  <h2 className="font-weight-bold mb-3">Penetration Testing & Assessments</h2>
                  <div className="h-100">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </ScrollAnimation>
              </div>
             
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                 <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <h2 className="font-weight-bold mb-3">Incident Response Services</h2>
                  <div className="h-100">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
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
                  <h2 className="font-weight-bold mb-3">SEIM</h2>
                  <div className="h-100">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </ScrollAnimation>
              </div>
             
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                 <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <h2 className="font-weight-bold mb-3">Cyber Threat Hunting</h2>
                  <div className="h-100">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
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
                  <h2 className="font-weight-bold mb-3">Compliance & Strategies</h2>
                  <div className="h-100">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </ScrollAnimation>
              </div>
             
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                 <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <h2 className="font-weight-bold mb-3">Industries</h2>
                  <div className="h-100 mt-4">
                    <div className="row">
                      <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp">
                          <div className="border rounded-0 shadow-lg val-prop">
                          <img className="img-fluid" src={Financial} width={150} alt="Financial Services"/>
                          <h4 className="my-3">Financial Services</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <Link className="btn btn-primary" role="button" to="/">Read More</Link>
                          </div>                          
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp">
                        <div className="border rounded-0 shadow-lg val-prop">
                        <img className="img-fluid" src={Hospitality} width={150} alt="Service & Hospitality"/>
                          <h4 className="my-3">Service & Hospitality</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <Link className="btn btn-primary" role="button" to="/">Read More</Link>
                          </div>   
                          
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp">
                          <div className="border rounded-0 shadow-lg val-prop">
                          <img className="img-fluid" src={Federal} width={150} alt="Federal"/>
                          <h4 className="my-3">Federal</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <Link className="btn btn-primary" role="button" to="/public-sector">Read More</Link>
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

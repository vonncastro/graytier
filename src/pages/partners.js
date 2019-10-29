import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import Overview from '../components/overview'

import BunkerLabs from '../images/bunker-labs.png'
import CACI from '../images/cacilogo-136x75.png'
import Jacobs from '../images/jlogo-239x37.png'
import HomelandSecurity from '../images/homeland-security.png'
import Leidos from '../images/leidos.png'
import Perspecta from '../images/perspecta.png'
import USCustoms from '../images/us-customs.png'
import JSP from '../images/jsp.png'
import USCyberCommand from '../images/us-cyber-command.png'
import NCCIC from '../images/nccic.png'

class PartnersPage extends React.Component {
  render() {
    const siteTitle = 'Partners'
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
                  <h1 className="font-weight-bold">Partners</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="1000">
                  <h5 className="pt-3 font-weight-lighter text-white">
                    Working with the best
                  </h5>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content text-center">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold pb-4">Our Business Mentors</h2>
              <a
                href="https://bunkerlabs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid partner-logo"
                  src={BunkerLabs}
                  alt="Bunker Labs"
                />
              </a>
            </ScrollAnimation>
          </div>
        </div>
        <div className="page-content bg-light text-center">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold pb-4">Our Strategic Partners</h2>

              <img className="img-fluid partner-logo" src={CACI} alt="CACI" />
              <img
                className="img-fluid partner-logo"
                src={Jacobs}
                alt="Jacobs"
              />
              <img
                className="img-fluid partner-logo"
                src={Leidos}
                alt="Leidos"
              />
              <img
                className="img-fluid partner-logo"
                src={Perspecta}
                alt="Perspecta"
              />
            </ScrollAnimation>
          </div>
        </div>
        <div className="page-content text-center">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold pb-4">Our Customers</h2>
              <img
                className="img-fluid partner-logo"
                src={USCustoms}
                alt="US Customs and Border Protection"
              />
              <img
                className="img-fluid partner-logo"
                src={JSP}
                alt="Joint Service Provider"
              />
              <img
                className="img-fluid partner-logo"
                src={USCyberCommand}
                alt="US Cyber Command"
              />
              <img className="img-fluid partner-logo" src={NCCIC} alt="NCCIC" />
              <img
                className="img-fluid partner-logo"
                src={HomelandSecurity}
                alt="US Department of Homeland Security"
              />
            </ScrollAnimation>
          </div>
        </div>
        <Overview />
      </Layout>
    )
  }
}

export default PartnersPage

export const partnersPageQuery = graphql`
  query partnersPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

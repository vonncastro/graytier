import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import Overview from '../components/overview'

class AboutPage extends React.Component {
  render() {
    const siteTitle = 'About'
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
                  <h1 className="display-4">About</h1>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeIn"
                  delay="1000"
                  scrollableParentSelector=".page-headline"
                >
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
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row pb-5 text-center">
                  <div className="col-md-6 py-2">
                    <ScrollAnimation animateIn="fadeInLeft" className="h-100">
                      <h4 className="font-weight-bold text-uppercase text-blue">
                        Our Mission
                      </h4>
                      <div className="h-100">
                        <p className="lead">
                          To prepare our customers to defend their systems
                          against global cyber threats.
                        </p>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="col-md-6 bordered-col-text py-2">
                    <ScrollAnimation animateIn="fadeInRight" className="h-100">
                      <h4 className="font-weight-bold text-uppercase text-blue">
                        Our Vision
                      </h4>
                      <div className="h-100">
                        <p className="lead">
                          To be the premier security services and solutions
                          provider for our enterprise, government, and military
                          customers.
                        </p>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
                <p>
                  Gray Tier is an advanced consulting company that focuses on,
                  developing, technical solutions to the toughest cyber security
                  challenges faced by both Enterprise and Government customers.
                </p>
                <p>
                  Gray Tier approaches challenges by leveraging our years of
                  technical experience in IT security, system administration,
                  and engineering to provide custom solutions that our clients
                  can immediately use to enhance the security of their IT
                  assets.
                </p>
                <p>
                  Gray Tier's "Cyber Adversary" service is our advanced custom
                  offering that provides an emulation of specific threat
                  vectors, typically used by Advanced Persistent Threats (APT),
                  to offer a security assessment of Information Technology (IT)
                  systems and networks with the goal of providing a realistic
                  scenario based evaluation of technical and procedural
                  countermeasures.
                </p>
                <p>
                  Gray Tier's technical and professional expertise is the
                  foundation of the services we offer to our clients. We take
                  pride in our developments and contributions to the security
                  community. Our team is most at home focusing on the toughest
                  challenges facing our clients. Whether it is leveraging
                  advanced scientific research and development, providing the
                  most up-to-date relevant training, and/or using our
                  proprietary technologies, Gray Tier is poised to offer cutting
                  edge solutions to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Overview />
      </Layout>
    )
  }
}

export default AboutPage

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

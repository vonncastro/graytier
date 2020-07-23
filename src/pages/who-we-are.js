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
import Penetration from '../images/penetration-testing.png'
import Threat from '../images/threat-simulation.png'
import Incident from '../images/incident.png'
import SEIM from '../images/penetration.png'
import Compliance from '../images/compliance.png'

class whoWeArePage extends React.Component {
  render() {
    const siteTitle = 'We Are Penetration Testing Experts - Gray Tier'
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
        <div className="page-content bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6 text-center mb-4">
                <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <div className="img-fluid">
                    <img
                      className="img-fluid"
                      src={Penetration}
                      width={150}
                      alt="Financial Services"
                    />
                  </div>
                  <h2 className="font-weight-bold mb-3">
                    Penetration Testing & Assessments
                  </h2>
                  <div className="h-100">
                    <p>
                      Penetration testing, also known as pentesting or pen
                      testing, is one of the best ways to assess the strengths
                      and weaknesses of your security perimeter and related
                      controls, policies, and procedures. In these tests,
                      sometimes referred to as “ethical hacking,” information
                      security experts simulate the thought processes and
                      actions of attackers. Leveraging technical knowledge, as
                      well as publicly available or well-known information (such
                      as default passwords), these experts are often able to
                      crack systems and networks – revealing important
                      vulnerabilities.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="col-md-6 text-center mb-4">
                <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <div className="img-fluid">
                    <img
                      className="img-fluid"
                      src={Incident}
                      width={150}
                      alt="Financial Services"
                    />
                  </div>
                  <h2 className="font-weight-bold mb-3">
                    Incident Response Services
                  </h2>
                  <div className="h-100">
                    <p>
                      Whether you want to minimize the cost and damages that
                      result from an incident, or you’re concerned that you’ve
                      been breached and don’t know it, Gray Tier's incident
                      responders and threat hunters are ready to help. Our
                      proven, methodical, and evidence-driven approach will keep
                      you in control of whatever chaos an incident may bring.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="col-md-6 text-center mb-4">
                <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <div className="img-fluid">
                    <img
                      className="img-fluid"
                      src={SEIM}
                      width={150}
                      alt="Financial Services"
                    />
                  </div>
                  <h2 className="font-weight-bold mb-3">SEIM</h2>
                  <div className="h-100">
                    <p>
                      Gray Tier Technologies, LLC will provide SEIM which
                      provides 24x7x365 monitoring for known and unknown cyber
                      threats. This will include the use of signature,
                      behavioral and anomaly detection capabilities, threat
                      intelligence, and incident response. Near real-time
                      consolation will be provided, to the customer’s POC, for
                      all alerts. A situational report will be provided as a
                      summary of all network activity.
                    </p>
                    <p>
                      The following General Solutions will be provided for SEIM:
                    </p>
                    <ul>
                      <li className="text-left">
                        Cybersecurity Consulting based off findings
                      </li>
                      <li className="text-left">Endpoint Detection</li>
                      <li className="text-left">Log Collection & Management</li>
                      <li className="text-left">Monitoring and Alerting</li>
                      <li className="text-left">
                        Incident Response Recommendation
                      </li>
                      <li className="text-left">Program Development</li>
                      <li className="text-left">Threat Intelligence</li>
                      <li className="text-left">
                        Threat Reporting (Situational Awareness)
                      </li>
                      <li className="text-left">
                        VPN for secure remote service
                      </li>
                      <li className="text-left">
                        Encrypted Storage of metadata
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="col-md-6 text-center mb-4">
                <ScrollAnimation animateIn="fadeInDown" className="h-100">
                  <h2 className="font-weight-bold mb-3">
                    <div className="img-fluid">
                      <img
                        className="img-fluid"
                        src={Threat}
                        width={150}
                        alt="Financial Services"
                      />
                    </div>
                    Cyber Threat Hunting
                  </h2>
                  <div className="h-100">
                    <p>
                      Cyber threat hunting assumes a mindset that your network
                      has already been breached because existing controls have
                      failed. Network health indicators aren’t always entirely
                      accurate, even when you’re looking for anomalies.
                      Proactively searching your network for undiscovered
                      attackers – past and present – can help you detect
                      incidents sooner and find threats you wouldn’t have caught
                      otherwise. The average attacker is often not discovered
                      until weeks or even months after they breach an IT
                      environment, and often by a third party. So you might not
                      find out about threat actors lurking on your systems until
                      it’s too late.
                    </p>
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
                  <div className="img-fluid">
                    <img
                      className="img-fluid"
                      width={150}
                      src={Compliance}
                      alt="Financial Services"
                    />
                  </div>
                  <h2 className="font-weight-bold mb-3">
                    Compliance & Strategies
                  </h2>
                  <div className="h-100">
                    <p>
                      Gray Tier Technologies, LLC will provide expert
                      consultation for security & risks. Gray Tier continually
                      will work with clients to identify risk areas within their
                      organization and develop security strategies and solutions
                      that will enable them to better protect internal and
                      client data. Our policy consultation will focus on
                      cybersecurity, completing risk assessments and developing
                      a cybersecurity program that will focus on security
                      enhancements and strategy.
                    </p>
                    <p>
                      The following solutions will be provided for Policy
                      Consultation:
                    </p>
                    <ul>
                      <li className="text-left">Security Policy Development</li>
                      <li className="text-left">Policy Templates</li>
                      <li className="text-left">
                        Research Industry Needs and Compliance
                      </li>
                    </ul>
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
                            <img
                              className="img-fluid"
                              src={Financial}
                              width={150}
                              alt="Financial Services"
                            />
                            <h4 className="my-3">Financial Services</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <Link
                              className="btn btn-primary"
                              role="button"
                              to="/"
                            >
                              Read More
                            </Link>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp">
                          <div className="border rounded-0 shadow-lg val-prop">
                            <img
                              className="img-fluid"
                              src={Hospitality}
                              width={150}
                              alt="Service & Hospitality"
                            />
                            <h4 className="my-3">Service & Hospitality</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <Link
                              className="btn btn-primary"
                              role="button"
                              to="/"
                            >
                              Read More
                            </Link>
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp">
                          <div className="border rounded-0 shadow-lg val-prop">
                            <img
                              className="img-fluid"
                              src={Federal}
                              width={150}
                              alt="Federal"
                            />
                            <h4 className="my-3">Federal</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <Link
                              className="btn btn-primary"
                              role="button"
                              to="/military-federal"
                            >
                              Read More
                            </Link>
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

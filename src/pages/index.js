import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// import Swiper from 'react-id-swiper'
// import 'react-id-swiper/lib/styles/css/swiper.css'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import HeroParticles from '../components/particles'
import Overview from '../components/overview'

import ATFimg from '../images/atf-img.png'
import DownArrow from '../images/down-arrow.svg'

import ThreatSimulation from '../images/threat-simulation.png'
import Consulting from '../images/consulting.png'
import SoftwareRD from '../images/software-r-d.png'

import RedTeaming from '../images/red-teaming.png'
import PenetrationTesting from '../images/penetration-testing.png'
import ApplicationTesting from '../images/application-testing.png'
import WebApplicationTesting from '../images/web-application-testing.png'
import OpenSourceIntelligence from '../images/open-source-intelligence.png'
import SocialEngineering from '../images/social-engineering.png'

// import BunkerLabs from '../images/bunker-labs.png'
// import CACI from '../images/cacilogo-136x75.png'
// import Jacobs from '../images/jlogo-239x37.png'
// import HomelandSecurity from '../images/homeland-security.png'
// import Leidos from '../images/leidos.png'
// import Perspecta from '../images/perspecta.png'
// import USCustoms from '../images/us-customs.png'
// import JSP from '../images/jsp.png'
// import USCyberCommand from '../images/us-cyber-command.png'
// import NCCIC from '../images/nccic.png'
import marked from 'marked'

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { data } = this.props
    const posts = data.allSanityPost.edges

    // const logos = {
    //   slidesPerView: 4,
    //   spaceBetween: 0,
    //   speed: 500,
    //   loop: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   navigation: {
    //     nextEl: '#logo-next',
    //     prevEl: '#logo-prev',
    //   },
    //   breakpoints: {
    //     768: {
    //       slidesPerView: 3,
    //     },
    //     640: {
    //       slidesPerView: 1,
    //     },
    //   },
    // }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div>
          <div className="above-the-fold">
            <img className="atf-img" src={ATFimg} alt="" />
            <HeroParticles />
            <div className="container">
              <ScrollAnimation animateIn="fadeInDown" duration="2">
                <h2 className="text-blue">Nosce Te Ipsum</h2>
                <h1 className="text-white font-weight-bold display-4">
                  Know Yourself. Know Your Enemy.
                </h1>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                delay="1000"
                scrollableParentSelector=".above-the-fold"
              >
                <div className="row justify-content-center py-3">
                  <div className="col-md-8">
                    <p className="lead text-white font-weight-light">
                      Gray Tier is an advanced consulting company that focuses
                      on, developing, technical solutions to the toughest cyber
                      security challenges faced by both enterprise and
                      government customers.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay="2000"
                scrollableParentSelector=".above-the-fold"
              >
                <Link
                  className="btn btn-primary btn-lg btn-ripple mt-4"
                  role="button"
                  to="/contact"
                >
                  Get an Overview Today
                </Link>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInDown"
                delay="2500"
                scrollableParentSelector=".above-the-fold"
              >
                <div className="mt-5 pt-4">
                  <a href="#solutions">
                    <img src={DownArrow} alt="scroll down" width="42px" />
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="below-atf text-center" id="solutions">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-4 props">
                  <ScrollAnimation animateIn="fadeInLeft" className="h-100">
                    <div className="border rounded-0 shadow-lg val-prop col-with-link">
                      <img
                        src={ThreatSimulation}
                        alt="Threat Simulation"
                        className="img-fluid"
                        width="150px"
                      />
                      <h4 className="font-weight-bold py-3">
                        Threat Simulation
                      </h4>
                      <p className="m-0">
                        Our operators can conduct a full range of InfoSec
                        operations from network infiltration and intelligence
                        gathering to implementing tailored effects.
                      </p>
                      <div className="col-link">
                        <Link className="arrow-link" to="/">
                          Learn More
                          <i className="fa fa-chevron-circle-right" />
                        </Link>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 props">
                  <ScrollAnimation animateIn="fadeInUp" className="h-100">
                    <div className="border rounded-0 shadow-lg val-prop col-with-link">
                      <img
                        src={Consulting}
                        alt="Consulting"
                        className="img-fluid"
                        width="150px"
                      />
                      <h4 className="font-weight-bold py-3">Consulting</h4>
                      <p className="m-0">
                        Our consulting services are tailored to help our clients
                        solve their toughest security challenges.
                      </p>
                      <div className="col-link">
                        <Link className="arrow-link" to="/">
                          Learn More
                          <i className="fa fa-chevron-circle-right" />
                        </Link>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 props">
                  <ScrollAnimation animateIn="fadeInRight" className="h-100">
                    <div className="border rounded-0 shadow-lg val-prop col-with-link">
                      <img
                        src={SoftwareRD}
                        alt="Software R&D"
                        className="img-fluid"
                        width="150px"
                      />
                      <h4 className="font-weight-bold py-3">Software R&D</h4>
                      <p className="m-0">
                        We specialize in developing bespoke offensive and
                        defensive tools to support our client’s training and
                        operations.
                      </p>
                      <div className="col-link">
                        <Link className="arrow-link" to="/">
                          Learn More
                          <i className="fa fa-chevron-circle-right" />
                        </Link>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>

          <div className="who-section bg-light">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <h2 class="font-weight-bold"><Link className="text-dark-blue" to="/who-we-are">Who We Are</Link></h2>
                  <ScrollAnimation animateIn="fadeIn">
                    <p class="lead py-4">
                      We provide technical assessment program development,
                      independent testing, operational assessment support, and
                      premier training in Adversary Tactics, Techniques, and
                      Procedures.
                    </p>
                  </ScrollAnimation>
                  <Link className="btn btn-primary" role="button" to="/who-we-are">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark services">
            <div className="container">
              <h2 className="font-weight-bold"><Link className="text-white" to="/services">How We Help</Link></h2>
              <div className="row text-center justify-content-center my-5">
                <div className="col-md-6 col-lg-4 mb-4 props">
                  <ScrollAnimation animateIn="fadeIn" className="h-100">
                    <div className="border rounded-0 shadow-lg val-prop">
                      {/*
                      <div>
                        <ScrollAnimation
                          animateIn="flipInY"
                          delay="500"
                          className="diamond-div"
                        >
                          <div className="diamond mx-auto">
                            <div className="diamond-content">
                              <img src={RedTeaming} alt="Red Teaming" />
                            </div>
                          </div>
                        </ScrollAnimation>
                        <div className="diamond-shadow" />
                      </div> */}
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
                      {/*
                      <div>
                        <ScrollAnimation
                          animateIn="flipInY"
                          delay="500"
                          className="diamond-div"
                        >
                          <div className="diamond mx-auto">
                            <div className="diamond-content">
                              <img
                                src={PenetrationTesting}
                                alt="Penetration Testing"
                              />
                            </div>
                          </div>
                        </ScrollAnimation>
                        <div className="diamond-shadow" />
                      </div>
                    */}
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
                        Comprehensive risk, vulnerability, and penetration
                        testing intelligence with prioritized risk-rated
                        recommendations
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 props">
                  <ScrollAnimation animateIn="fadeIn" className="h-100">
                    <div className="border rounded-0 shadow-lg val-prop">
                      {/*
                      <div>
                        <ScrollAnimation
                          animateIn="flipInY"
                          delay="500"
                          className="diamond-div"
                        >
                          <div className="diamond mx-auto">
                            <div className="diamond-content">
                              <img
                                src={ApplicationTesting}
                                alt="Application Testing"
                              />
                            </div>
                          </div>
                        </ScrollAnimation>
                        <div className="diamond-shadow" />
                      </div>
                    */}
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
                      {/*
                      <div>
                        <ScrollAnimation
                          animateIn="flipInY"
                          delay="500"
                          className="diamond-div"
                        >
                          <div className="diamond mx-auto">
                            <div className="diamond-content">
                              <img
                                src={WebApplicationTesting}
                                alt="Web Application Testing"
                              />
                            </div>
                          </div>
                        </ScrollAnimation>
                        <div className="diamond-shadow" />
                      </div>
                    */}
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
                      {/*
                      <div>
                        <ScrollAnimation
                          animateIn="flipInY"
                          delay="500"
                          className="diamond-div"
                        >
                          <div className="diamond mx-auto">
                            <div className="diamond-content">
                              <img
                                src={OpenSourceIntelligence}
                                alt="Open Source Intelligence"
                              />
                            </div>
                          </div>
                        </ScrollAnimation>
                        <div className="diamond-shadow" />
                      </div>
                    */}
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
                        Open-source intelligence (OSINT) is intelligence
                        collected from publicly available sources
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 props">
                  <ScrollAnimation animateIn="fadeIn" className="h-100">
                    <div className="border rounded-0 shadow-lg val-prop">
                      {/*
                      <div>
                        <ScrollAnimation
                          animateIn="flipInY"
                          delay="500"
                          className="diamond-div"
                        >
                          <div className="diamond mx-auto">
                            <div className="diamond-content">
                              <img
                                src={SocialEngineering}
                                alt="Social Engineering"
                              />
                            </div>
                          </div>
                        </ScrollAnimation>
                        <div className="diamond-shadow" />
                      </div>
                    */}
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
              <Link className="btn btn-primary" role="button" to="/services">
                Our Services
              </Link>
            </div>
          </div>
          
          <Overview />

          <div className="resources">
            <div className="container-fluid h-100">
              <div className="row justify-content-between">
                <div className="col-lg-7 d-flex flex-column bg-blue posts">
                  <div className="row">
                    <div className="col-12 col-md-8 text-center text-md-left align-self-center pb-md-4">
                      <h3 className="font-weight-bold keep-all text-white">
                        From the Blog
                      </h3>
                    </div>
                    <div className="col-md-4 text-center text-md-right align-self-center pb-4">
                      <Link className="text-white arrow-link pr-0" to="/blog">
                        All Posts&nbsp;
                        <i className="fa fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  {posts.map(({ node }) => {
                    const title = node.title
                    return (
                      <div className="row flex-grow-1">
                        <div className="col-lg-5 order-2 order-lg-1 pr-lg-0">
                          <div className="blog post-item h-100">
                            <Link
                              className="m-0 post-link"
                              to={node.slug.current}
                              title="slug"
                            >
                              <h4 className="m-0">{title}</h4>
                            </Link>
                            <span className="small text-uppercase text-muted">
                              {node.publishedAt}
                            </span>
                            <div className="truncate-9 text-muted">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: marked(node.excerpt),
                                }}
                              />
                            </div>
                            <Link
                              className="btn btn-primary btn-sm mt-4"
                              role="button"
                              to={node.slug.current}
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2 pl-lg-0">
                          <div
                            className="blog-post-img h-100"
                            style={{
                              backgroundImage: `url('https://picsum.photos/200/300/?blur=2')`,
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="col-lg-5 bg-light posts">
                  <div className="row">
                    <div className="col-12 col-md-5 text-center text-md-left align-self-center pb-md-4">
                      <h3 className="font-weight-bold keep-all">Newsroom</h3>
                    </div>
                    <div className="col-md-7 text-center text-md-right align-self-center pb-4">
                      <Link className="arrow-link pr-0" to="/news">
                        Latest Stories&nbsp;
                        <i className="fa fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="h-100">
                    <div className="news post-item">
                      <Link className="m-0 post-link" to="/">
                        <h6 className="m-0">
                          Gray Tier Technologies continues to grow
                        </h6>
                      </Link>
                      <span className="small text-uppercase text-muted">
                        September 09, 2019
                      </span>
                      <p className="truncate-3 text-muted small">
                        Gray Tier Technologies continues the positive trend in
                        January and February 2017. &nbsp;By the end of February
                        Gray Tier will add 5 new employees to its staff, mostly
                        to the JSP-DCO effort.
                      </p>
                      <Link
                        className="btn btn-primary btn-sm mt-4 btn-black-transparent"
                        role="button"
                        to="/"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="news post-item">
                      <Link className="m-0 post-link" to="/">
                        <h6 className="m-0">
                          Gray Tier Technologies on Winning Team for JSP CND-SP
                        </h6>
                      </Link>
                      <span className="small text-uppercase text-muted d-block">
                        September 04, 2019
                      </span>
                      <p className="truncate-3 text-muted small">
                        Gray Tier Technologies LLC was on the winning team
                        that&nbsp;won a task order through the Department of
                        Defense Joint Service Provider program to develop and
                        deploy an in-depth security network strategy that will
                        deter and neutralize malicious activities for various
                        offices within the Pentagon.
                      </p>
                      <Link
                        className="btn btn-primary btn-sm mt-4 btn-black-transparent"
                        role="button"
                        to="/"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allSanityPost(
      limit: 1
      filter: { status: { eq: "published" } }
      sort: { fields: [author____createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          publishedAt(formatString: "MMMM DD, YYYY")
          excerpt
          slug {
            current
          }
          mainImage {
            asset {
              id
              url
              originalFilename
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

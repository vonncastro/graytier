import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'
import Overview from '../components/overview'

import csa from '../images/Gray_Tier_Tech_Capability-Statement-1.png'
import ir from '../images/Gray_Tier_Tech_IR-1.png'
import vps from '../images/Gray_Tier_Tech_VPS-1.png'
import cyhy from '../images/Gray-Tier-Tech-CyHy.png'

class PublicSectorPage extends React.Component {
  render() {
    const siteTitle =
      'Government & Military Penetration Testing & Cyber Security'
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
                  <h1 className="font-weight-bold">Military & Federal</h1>
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
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold mb-3 text-center">
                Gray Tier's Philosophy
              </h2>
              <div className="h-100 mt-4 text-center">
                <p>Compliance does not mean SECURITY</p>
                <p>
                  Compliance just a snapshot of your security program to a
                  specific framework's set of security requirements at a given
                  moment in time.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="page-content bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <ScrollAnimation animateIn="fadeIn">
                  <div className="content text-center">
                    <h2 className="mb-4">
                      Meet Gray Tier’s Military & Federal Team
                    </h2>
                    <div className="h-100">
                      <p>
                        Gray Tier’s Military & Federal team provides a wide
                        range of professional government cyber security services
                        to many departments and agencies. We work with many
                        government clients, including those that execute
                        critical cyber operations in national and homeland
                        security. We also work with government-funded research
                        institutions. Gray Tier is uniquely qualified to help
                        Military & Federal entities prevent and minimize cyber
                        risks. Our team has the strategic and operational
                        experience to effectively assist government
                        organizations with their cyber security needs. Our
                        experts who have developed an impressive track record
                        with military entities, intelligence organizations, and
                        Fortune 500 companies.
                      </p>
                      <p>
                        Gray Tiers is a verified{' '}
                        <a
                          href="https://www.vip.vetbiz.va.gov/Search/BusinessProfile/5bbb3258-766a-e811-9445-0050568df19d"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Service Disabled Veteran Owned Small Business (SDVOSB)
                        </a>{' '}
                        and is eligible to be your sole-source provider of these
                        solutions. Research some of our areas of expertise in
                        more detail below.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content" id="complianceSection">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold mb-3 text-center">
                For Government and Defense Customers
              </h2>
              <p>
                Gray Tier's primary characterization is offensive cyber
                operations (OCO) with a specialization in defensive
                cybersecurity operations (DCO), NIST Risk Management Framework
                (RMF) support, and FISMA compliance. We provide solutions in
                areas such as Assessment and Authorization (A&A), Security
                Engineering, and Information Systems Security Officer (ISSO) to
                support and develop custom software applications to enhance and
                automate these functions.
              </p>
              <p>
                Our team is thoroughly vetted, security-cleared and certified up
                to DoD 8570.01-m IAT, IAM and IASAE Level III levels I through
                III.
              </p>
              <h2 className="font-weight-bold mb-3 text-center">
                Our Cybersecurity Solutions Include
              </h2>

              <ul>
                <li>PCI, FISMA, and NIST Compliance</li>
                <li>RMF Assessment & Authorization (A&A)</li>
                <li>Independent Risk and Vulnerability Assessments (IV&V)</li>
                <li>Penetration Testing</li>
                <li>HVA & RVA Assessments</li>
                <li>24/7/365 Managed Security Services Provider</li>
                <li>Intrusion Detection & Prevention</li>
                <li>Cyber Forensics & Incident Response</li>
                <li>Cybersecurity Engineering & Advisory</li>
                <li>IAVM & ISVM announcements</li>
              </ul>
              <p>
                Failure to meet the requirements of FISMA could result in budget
                cuts to an agency or termination from a contract for a private
                government contractor.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold mb-3 text-center">
                RMF, A&A, & FISMA
              </h2>
              <p>
                Gray Tier's past performance in the validation and assessment of
                systems and enclaves worldwide, both classified and
                unclassified, in accordance with the NIST Risk Management
                Framework (RMF) and the Federal Information Security Management
                Act (FISMA).
              </p>
              <p>
                Gray Tier provides top tier security engineering solutions to
                ensure compliance with RMF and FISMA in accordance with NIST
                800-53 controls and to achieve a full Authorization to Operate
                (ATO). Our team performs over 150 such engagements each year to
                ensure the security and compliance of federal and defense
                information technology, weapons, ashore/afloat, and industrial
                control systems.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="page-content" id="contracts">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <ScrollAnimation animateIn="fadeIn">
                  <div className="content text-center">
                    <img
                      className="img-fluid mb-4"
                      src="/gsa_contract.png"
                      alt="gsa"
                      width={300}
                    />
                    <h2 className="mb-4">How to Order:</h2>
                    <p>
                      Federal, state, and local governments can rapidly buy
                      services from Gray Tier by using the following Highly
                      Adaptive Cybersecurity Services (HACS) Special Item
                      Numbers (SIN) on GSA’s IT Schedule 70:
                    </p>

                    <p className="mb-0">SIN 132 45 A: Penetration Testing</p>
                    <p className="mb-0">
                      SIN 132 45B: Incident Response Services
                    </p>
                    <p className="mb-0">SIN 132 45C: Cyber Hunt</p>
                    <p className="mb-0">
                      SIN 132 45D: Risk &amp; Vulnerability Assessments
                    </p>

                    <h4 className="mt-4">
                      Gray Tier also has two additional GSA SINS:
                    </h4>
                    <p className="mb-0">SIN #132-50: Training Services</p>
                    <p>SIN #132-51: Professional Services</p>
                    <p className="mb-5">
                      To learn more about how to order go to{' '}
                      <a
                        href="https://www.gsa.gov/portal/content/198589"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.gsa.gov/portal/content/198589
                      </a>
                    </p>
                    <Link
                      className="btn btn-primary"
                      role="button"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <div className="text-center">
                <h2 className="font-weight-bold mb-3">
                  Verify the Strength of Your Information Security Program
                </h2>
                <h4>Cyber Security Program Assessments</h4>
              </div>

              <div className="h-100 mt-4">
                <p>
                  Developing a program, reviewing its effectiveness, and testing
                  program resilience will help ensure your organization has met
                  its compliance obligations.
                </p>
                <p>
                  Our assessments review your current cyber and IT risks,
                  policies, and programs. With this comprehensive analysis, we
                  can identify your program’s strengths and weaknesses to find
                  any security gaps. We can also advise your organization on the
                  optimal solutions for your business based on your unique risks
                  and resource constraints.
                </p>
                <p>
                  Once developed, you need to test the effectiveness of your
                  program in simulated real-world scenarios. Gray Tier offers
                  red-team and table-top exercises tailored to your specific
                  requirements, and developed with our expertise in defending
                  government networks.
                </p>
                <p>
                  As insider threats (i.e., malicious or negligent employees)
                  can also be a major concern for Military & Federal entities,
                  we deliver services directed at managing the human element of
                  security. Gray Tier offers cyber security training and
                  awareness courses for all levels of digital expertise.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <h2 className="mb-4 text-center">Our Customers</h2>
            <div className="row flex-wrap justify-content-between">
              <div className="col-md-2 text-center">
                <ScrollAnimation animateIn="fadeIn">
                  <img src="/dhs_logo_ps2.jpg" alt="dhs logo" width={150} />
                </ScrollAnimation>
              </div>
              <div className="col-md-2 text-center">
                <ScrollAnimation animateIn="fadeIn">
                  <img src="/dod_logo_ps.jpg" alt="dod logo" width={150} />
                </ScrollAnimation>
              </div>
              <div className="col-md-2 text-center">
                <ScrollAnimation animateIn="fadeIn">
                  <img src="/usmc_logo_ps.jpg" alt="usmc logo" width={150} />
                </ScrollAnimation>
              </div>
              <div className="col-md-2 text-center">
                <ScrollAnimation animateIn="fadeIn">
                  <img src="/army_logo_ps.jpg" alt="army logo" width={150} />
                </ScrollAnimation>
              </div>
              <div className="col-md-2 text-center">
                <ScrollAnimation animateIn="fadeIn">
                  <img src="/usaf_logo_ps.jpg" alt="usaf logo" width={150} />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container text-center">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold mb-3">
                Access Services Built Around Your Security Needs
              </h2>
              <h4>SOC-as-a-Services</h4>
              <div className="h-100 mt-4">
                <p>
                  Gray Tier’s managed security services efficiently and
                  effectively manage your technical security needs. Our services
                  are scalable to the size, complexity, and risk tolerance of
                  your organization.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <div className="text-center">
                <h2 className="font-weight-bold mb-3">
                  Protecting Government Data with Comprehensive Cyber Defenses
                </h2>
                <h4>Military & Federal Breach Response Services</h4>
              </div>

              <div className="h-100 mt-4">
                <p>
                  If your organization suffers a breach, or you suspect one has
                  already occurred, Gray Tier offers a variety of services to
                  help you respond, including:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://deltarisk.com/wp-content/uploads/2018/06/computer_working.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <ul className="d-flex flex-column">
                      <li>
                        Hunting for current or undiscovered threats affecting
                        your network,
                      </li>
                      <li>
                        Coaching your organization through difficult decisions
                        after a breach, and
                      </li>
                      <li>
                        Providing a response team with a host of capabilities to
                        deal with an active threat.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold mb-3 text-center">
                Multi-Faceted Cyber Security Issues Impact Military & Federal
              </h2>
              <p>
                Government organizations across the globe must protect and
                defend their data and networks against persistent cyber threats.
                No organization is immune to the devastating consequences cyber
                criminals and sophisticated nation-state actors can cause by
                accessing a public entity’s sensitive/classified information,
                intellectual property (IP), and/or personally identifiable
                information.
              </p>
              <p>
                Most organizations recognize the threat of a foreign entity
                gaining access to state secrets or defense matters. There are a
                myriad of other cyber threats facing Military & Federal
                organizations, however. For one, countries are actively
                exfiltrating intellectual property. This not only damages the
                competitive advantage of private companies, but it can also
                affect national security.
              </p>
              <h2 className="font-weight-bold mb-3 text-center">
                Identifying Threat Types and Motivations
              </h2>
              <p>
                Malicious cyber actors target governmental organizations because
                of the vast databases of information they contain. This may
                include information on residents or extensive personal
                information on employees. This was illustrated by the U.S.
                Government’s{' '}
                <a
                  href="http://www.npr.org/sections/alltechconsidered/2016/06/06/480968999/one-year-after-opm-data-breach-what-has-the-government-learned"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Office of Personnel Management (OPM) breach
                </a>
                .
              </p>
              <p>
                An organization’s employees could also be considered threats.
                This threat can materialize as a malicious actor stealing
                sensitive data, or a negligent employee who inadvertently
                enables access to files and systems. The sheer number of people
                employed by the government both directly and as contractors
                creates additional risk.
              </p>
              <ul>
                <li>Maintain an Inventory of Information Systems</li>
                <li>
                  Categorize Information and Systems According to Risk Level
                </li>
                <li>Maintain a System Security Plan</li>
                <li>Implement Security Controls</li>
                <li>Conduct Risk Assessments</li>
                <li>Achieve Certification and/or Accreditation</li>
                <li>Conduct Continuous Monitoring</li>
              </ul>
              <p>
                Failure to meet the requirements of FISMA could result in budget
                cuts to an agency or termination from a contract for a private
                government contractor.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold mb-3 text-center">
                Military & Federal Compliance – FISMA Overview
              </h2>
              <div className="h-100 mt-4">
                <p>
                  In the US, the most important cyber regulation in the Military
                  & Federal is the Federal Information Security Management Act (
                  <a
                    href="https://www.dhs.gov/fisma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FISMA
                  </a>
                  ), passed in 2002 as part of the{' '}
                  <a
                    href="https://www.archives.gov/about/laws/egov-act-section-207.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    E-Government Act
                  </a>
                  , with updates in December 2014.
                </p>
                <p>
                  Similar to industry-specific cyber regulations like those in
                  the
                  {/*{' '}
                  <a href="" target="_blank" rel="noopener noreferrer"> */}
                  &nbsp;healthcare
                  {/*</a>{' '}*/}
                  &nbsp;or{' '}
                  {/*<a href="" target="_blank" rel="noopener noreferrer">*/}
                  financial services
                  {/*</a>{' '}*/}
                  industries, FISMA requires each federal agency to develop,
                  document, and implement a cyber security program. In addition
                  to all federal agencies, FISMA also applies to state agencies
                  that are administering federal programs. This includes
                  Medicare, Medicaid, unemployment insurance, and private
                  government contractors who meet expansive criteria.
                </p>
                <p>
                  If your organization is using a cloud environment, your cloud
                  service provider (CSP) must also comply with FISMA
                  requirements. The use of such services is reviewed under the
                  government-wide Federal Risk and Authorization Management
                  Program (
                  <a
                    href="https://www.fedramp.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FedRAMP
                  </a>
                  ).
                </p>
                <p>
                  FISMA assigns the role of developing the standards and minimum
                  security requirements to the National Institute of Standards
                  and Technology (NIST), which the Secretary of Commerce
                  approves. The requirements are extensive, encompassing 17
                  areas of security detailing approximately 205 specific
                  requirements.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="page-content border-top">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="font-weight-bold mb-3 text-center">
                Related Data Sheets
              </h2>
              <div className="h-100 mt-4 text-center">
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="/Gray_Tier_Tech_Capability-Statement.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="img-fluid mb-3" src={csa} alt="" />
                    </a>
                    <a
                      href="/Gray_Tier_Tech_Capability-Statement.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Cyber Security Assessments for the Military & Federal
                    </a>
                  </div>
                  {/*} <div className="col-md-3">
                    <a
                      href="https://go.deltarisk.com/l/513911/2019-04-10/czvys5/513911/190190/DS_Insider_Threats.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid mb-3"
                        src="https://deltarisk.com/wp-content/uploads/2019/03/insider-threat-datasheet-thumb.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://go.deltarisk.com/l/513911/2019-04-10/czvys5/513911/190190/DS_Insider_Threats.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Insider Threats
                    </a>
                  </div> */}
                  <div className="col-md-3">
                    <a
                      href="/Gray_Tier_Tech_IR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="img-fluid mb-3" src={ir} alt="" />
                    </a>
                    <a
                      href="/Gray_Tier_Tech_IR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Incident Response
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a
                      href="/Gray_Tier_Tech_VPS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="img-fluid mb-3" src={vps} alt="" />
                    </a>
                    <a
                      href="/Gray_Tier_Tech_VPS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Penetration Testing
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a
                      href="/Gray_Tier_Tech_CyHy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="img-fluid mb-3" src={cyhy} alt="" />
                    </a>
                    <a
                      href="/Gray_Tier_Tech_CyHy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Gray Tier CyHy (Cyber Hygiene)
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <Overview />
      </Layout>
    )
  }
}

export default PublicSectorPage

export const PublicSectorPageQuery = graphql`
  query PublicSectorPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import HeroParticles from '../components/particles'
import Overview from '../components/overview'

import nccicCircle from '../images/nccic-circle.png'
import JSP from '../images/jsp.png'
import HomelandSecurity from '../images/homeland-security.png'
import IOC from '../images/ioc.png'
import USCyberCommand from '../images/us-cyber-command.png'
import SDVOSB from '../images/sdvosb-logo.png'
import FSCSP from '../images/fscsp.png'
import Influence1 from '../images/influences-logo-01.png'
import Influence2 from '../images/influences-logo-02.png'
import Influence3 from '../images/influences-logo-03.png'
import Influence4 from '../images/influences-logo-04.png'
import Influence5 from '../images/influences-logo-05.png'
import Influence6 from '../images/influences-logo-06.png'
import Product1 from '../images/products-logo-1.png'
import Splunk from '../images/splunk-logo.png'
import VAS from '../images/vas-logo.png'
import PTS from '../images/pts.png'
import CVE from '../images/cve.png'
import SEAS from '../images/seas.png'
import RTAS from '../images/rtas.png'
import insiderthreat from '../images/InsiderThreat.png'
import cyhy from '../images/cyhy-wheel.png'
import SIEMAAS from '../images/siemaas.png'
class Capabilities extends React.Component {
	render() {
		const siteTitle = 'Commercial Penetration Testing & Cyber Security'
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
									<h1 className="font-weight-bold">
										Enterprise Cyber Security <br /> & Penetration Testing
										Experts
									</h1>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				<div className="page-content bg-light">
					<section id="who-are-we" className="mb-5">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-12 col-md-12">
									<ScrollAnimation animateIn="fadeInLeft" className="h-100">
										<h1 className="mb-3">Who are we ...</h1>
										<h3>Primary Area of Expertise:</h3>
										<p style={{ fontSize: `18px`, marginLeft: `15px` }}>
											<ul>
												<li>
													Offensive Cyber Security Strategies - "Assume Breach"
												</li>
												<li>
													Penetration Testing with Adversary Threat Simulation
												</li>
												<li>Active in the Cyber Security Community</li>
											</ul>
										</p>
									</ScrollAnimation>
								</div>
							</div>
							<div className="row justify-content-center align-items-center row-logos">
								<div className="col-lg-9 col-md-7 px-0">
									<ScrollAnimation animateIn="fadeInLeft">
										<div className="row">
											<div className="col-xl-12 col-md-6 px-0">
												<img
													className="img-fluid partner-logo"
													src={JSP}
													alt="Joint Service Provider"
												/>
												<img
													className="img-fluid partner-logo"
													src={nccicCircle}
													alt="US Department of Homeland Security"
												/>
												<img
													className="img-fluid partner-logo"
													src={HomelandSecurity}
													alt="US Department of Homeland Security"
												/>
											</div>
											<div className="col-xl-10 offset-xl-2 col-md-6 px-0">
												<img
													className="img-fluid partner-logo"
													src={USCyberCommand}
													alt="US Cyber Command"
												/>
												<img
													className="img-fluid partner-logo"
													src={IOC}
													alt="Information Operations Command"
												/>
											</div>
										</div>
									</ScrollAnimation>
								</div>
								<div className="col-lg-3 col-md-5 px-0 align-items-end">
									<ScrollAnimation animateIn="fadeInRight">
										<img
											className="img-fluid partner-logo"
											src={SDVOSB}
											alt="Service Disabled Veteran Owned Small Business"
										/>
										<h3 className="text-center">
											Service Disabled Veteran Owned Small Business
										</h3>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="full-stack-cyber" className="my-5">
						<div className="container">
							<div className="row justify-content-center row-indent">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">Full Stack Cyber Security Provider</h1>
								</ScrollAnimation>
							</div>
							<div className="row justify-content-center row-indent">
								<div className="col-lg-2 col-md-6 order-lg-1 order-md-2">
									<ScrollAnimation animateIn="fadeInLeft" className="h-100">
										<ul className="mb-5">
											<li>Penetration Testing</li>
											<li>Vulnerability Assessments</li>
											<li>Vulnerability Research Exploit Development</li>
										</ul>
										<ul>
											<li>Open Source Data Collection</li>
											<li>Phishing</li>
											<li>High Value Targets</li>
											<li>Incident Response Testing</li>
										</ul>
									</ScrollAnimation>
								</div>
								<div className="col-lg-8 col-md-12 order-lg-2 order-md-1 d-flex align-items-center">
									<img className="img-fluid" src={FSCSP} alt="FSCSP Graph" />
								</div>
								<div className="col-lg-2 col-md-6 order-lg-3 order-md-2">
									<ScrollAnimation animateIn="fadeInRight" className="h-100">
										<ul className="mb-5">
											<li>Incident Handling</li>
											<li>Incident Response</li>
											<li>Network Monitoring</li>
											<li>Log Collection / Correlation</li>
											<li>Threat Intelligence</li>
											<li>End Point Protection</li>
											<li>Automated Response</li>
											<li>Policy / Consulting</li>
										</ul>
										<ul>
											<li>Web Application Assessment</li>
											<li>Software Assessment</li>
											<li>Manual & Automated</li>
										</ul>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="our-influences" className="my-5">
						<div className="container">
							<div className="row justify-content-center">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">Our Influences . . .</h1>
								</ScrollAnimation>
							</div>
							<ScrollAnimation animateIn="fadeInRight" className="h-100">
								<div className="row justify-content-center my-5">
									<div className="col-lg-4 col-md-4">
										<div className="text-center">
											<img
												className="img-fluid mb-3"
												src={Influence1}
												alt="Influence 1"
											/>
											<p>
												Developed the US Army's Threat Emulation (Cyber OPFOR),
												to simulate Cyber Attacks while Combat Arms units
												trained during War Games.
											</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div className="text-center">
											<img
												className="img-fluid mb-3"
												src={Influence2}
												alt="Influence 2"
											/>
											<p>
												Created the Pentagon's Vulnerability Research & Exploit
												Development (VRED) Credited with 14 CVEs
											</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div className="text-center">
											<img
												className="img-fluid mb-3"
												src={Influence3}
												alt="Influence 3"
											/>
											<p>
												Pentagon Red Team <br /> DHS NCCIC/NCATS
												<br />
												Commercial Financial Sector
											</p>
										</div>
									</div>
								</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInLeft" className="h-100">
								<div className="row justify-content-center my-5">
									<div className="col-lg-4 col-md-4">
										<div className="text-center">
											<img
												className="img-fluid mb-3"
												src={Influence4}
												alt="Influence 4"
											/>
											<p>
												Pentagon PENTCIRT <br />
												DHS ENTERPRISE SOC
												<br /> DHS CBP SOC
												<br /> United States Cyber Commmand
												<br /> Commercial SOC as a Service
											</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div className="text-center">
											<img
												className="img-fluid mb-3"
												src={Influence5}
												alt="Influence 5"
											/>
											<p>
												Presentations at Security Conferences Training
												(Personalized) Blogs Software Sharing (GitHub)
											</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div className="text-center">
											<img
												className="img-fluid mb-3"
												src={Influence6}
												alt="Influence 6"
											/>
											<p>Defense in Depth - Assume Breach Methodology</p>
										</div>
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</section>
					<section id="products" className="page-content">
						<div className="container">
							<div className="row justify-content-center">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">Products</h1>
								</ScrollAnimation>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeInLeft" className="h-100">
										<img className="img-fluid" src={Product1} alt="Product 6" />
									</ScrollAnimation>
								</div>
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeInRight" className="h-100">
										<p style={{ fontSize: `22px` }}>
											Skillwerks is an on demand assessment platform to
											demonstrate individual computer skills and competencies.
										</p>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="splunk" className="page-content">
						<div className="container">
							<div className="row justify-content-center">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">SPLUNK Engineering</h1>
								</ScrollAnimation>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<ScrollAnimation animateIn="fadeIn" className="h-100">
										<p style={{ fontSize: `22px` }}>
											<strong>Splunk</strong> − Delivering & Developing powerful
											operational intelligence by providing real-time insight
											into your information systems through dashboards, charts,
											reports, and alerts.
										</p>
									</ScrollAnimation>
								</div>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeInLeft" className="h-100">
										<ul className="ml-3">
											<li>Security & Compliance</li>
											<li>Implementation</li>
											<li>Operation Analytics</li>
											<li>Assess & Design</li>
											<li>Cloud</li>
											<li>Development & Administration</li>
										</ul>
									</ScrollAnimation>
								</div>
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeInRight" className="h-100">
										<img className="img-fluid" src={Splunk} alt="Splunk Logo" />
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="vas" className="page-content">
						<div className="container">
							<div className="row justify-content-center row-logos">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">Vulnerability Assessments Solutions</h1>
								</ScrollAnimation>
							</div>
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<ScrollAnimation animateIn="fadeIn" className="h-100">
										<p style={{ fontSize: `22px` }}>
											<strong>Vulnerability Assessments (VA)</strong> −
											Independent expert review for a diverse set of potential
											vulnerabilities across a wide range of technologies.
										</p>
									</ScrollAnimation>
								</div>
								<div className="row mx-0 ml-3 align-items-center">
									<div className="col-lg-6 col-md-6">
										<ScrollAnimation animateIn="fadeInLeft" className="h-100">
											<ul>
												<li>
													Assessment of adequacy and effectiveness of system
													security control measures
												</li>
												<li>
													Evaluation of multiple technologies including:
													<ul>
														<li>Network & Operating Systems</li>
														<li>Applications (Web & Thick Client)</li>
														<li>Databases</li>
													</ul>
												</li>
											</ul>
										</ScrollAnimation>
									</div>
									<div className="col-lg-6 col-md-6">
										<ScrollAnimation animateIn="fadeInRight" className="h-100">
											<div className="d-flex ml-5">
												<img className="img-fluid w-50" src={VAS} alt="VAS" />
												<ul className="ml-3" style={{ marginTop: `75px` }}>
													<li>Vulnerability</li>
													<li>Threat</li>
													<li>Asset</li>
												</ul>
											</div>
										</ScrollAnimation>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="pts" className="page-content">
						<div className="container">
							<div className="row justify-content-center row-logos">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">Penetration Testing Solution</h1>
								</ScrollAnimation>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeLeft" className="h-100">
										<img
											className="img-fluid"
											src={PTS}
											alt="Penetration Testing Graph"
										/>
									</ScrollAnimation>
								</div>
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeRight" className="h-100">
										<p style={{ fontSize: `22px` }}>
											<strong>Penetration Testing (PT)</strong> − Implementation
											of proven testing methodology and lifecycle emulating
											modern threats
										</p>
										<ul className="ml-3">
											<li>
												Independent assessment of systems using perspective of
												external malicious attacker and informed insider
											</li>
											<li>
												Assessment of business impact and access to
												organizational vulnerabilities (technical/non-technical)
												of successful attack
											</li>
											<li>
												Test perimeter defenses, internal attack mitigation
												defenses, and information security detection and
												response capabilities
											</li>
										</ul>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="assa" className="page-content">
						<div className="container">
							<div className="row justify-content-center row-logos">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">
										Application Security Assessments Solution
									</h1>
								</ScrollAnimation>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-12 col-md-12">
									<ScrollAnimation animateIn="fadeIn" className="h-100">
										<p style={{ fontSize: `22px` }}>
											Assessment of security posture of 3rd party or custom
											developed applications across a wide range of operating
											platforms and attack perspectives.
										</p>
									</ScrollAnimation>
								</div>
								<div className="row mx-0">
									<div className="col-lg-6 col-md-6">
										<ScrollAnimation animateIn="fadeInLeft" className="h-100">
											<ul className="ml-3">
												<li>
													Web Application Vulnerability Assessments/Penetration
													Tests
												</li>
												<li>Mobile Device Application Testing</li>
												<li>Application Vulnerability Assessments</li>
												<li>Vulnerability Research & Exploit Development</li>
											</ul>
											<p style={{ fontSize: `22px` }}>
												Credited with over 15 CVEs for discovered
												vulnerabilities
											</p>
										</ScrollAnimation>
									</div>
									<div className="col-lg-6 col-md-6 img-center">
										<ScrollAnimation animateIn="fadeInRight" className="h-100">
											<div className="ml-5">
												<img
													className="img-fluid w-50 float-right"
													src={CVE}
													alt="CVE"
												/>
											</div>
										</ScrollAnimation>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="seas" className="page-content">
						<div className="container">
							<div className="row justify-content-center row-logos">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">
										Social Engineer Assessments Solutions
									</h1>
								</ScrollAnimation>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeLeft" className="h-100">
										<p style={{ fontSize: `22px` }}>
											Impact analysis of a successfully executed social
											engineering campaign in a controlled environment
										</p>
										<ul className="ml-3">
											<li>
												Open Source Intelligence/Information Gathering (OSINT)
											</li>
											<li>Spear-Phishing, Pretexting Campaigns</li>
											<li>
												Non-Technical Tests including Baiting, Tailgating,
												Dumpster Diving, among others
											</li>
											<li>Training</li>
										</ul>
									</ScrollAnimation>
								</div>
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeRight" className="h-100">
										<img
											className="img-fluid"
											src={SEAS}
											alt="Social Engineer Assessments Solutions"
										/>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="rtas" className="page-content">
						<div className="container">
							<div className="row justify-content-center row-logos">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">Red Team Assessments Solutions</h1>
								</ScrollAnimation>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeLeft" className="h-100">
										<img
											className="img-fluid"
											src={RTAS}
											alt="Red Team Assessments Solutions"
										/>
									</ScrollAnimation>
								</div>
								<div className="col-lg-6 col-md-6 order-2">
									<ScrollAnimation animateIn="fadeRight" className="h-100">
										<p style={{ fontSize: `22px` }}>
											Emulation of advanced attack profiles (e.g., nation-state,
											highly funded criminal organization, Hacktivism)
										</p>
										<ul className="ml-3">
											<li>
												Assessment of advanced defense and detection
												capabilities
											</li>
										</ul>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="insiderthreat" className="page-content">
						<div className="container">
							<div className="row justify-content-center row-logos">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">Insider Threat Program</h1>
								</ScrollAnimation>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeLeft" className="h-100">
										<img
											className="img-fluid"
											src={insiderthreat}
											alt="Red Team Assessments Solutions"
										/>
									</ScrollAnimation>
								</div>
								<div className="col-lg-6 col-md-6 order-2">
									<ScrollAnimation animateIn="fadeRight" className="h-100">
										<p style={{ fontSize: `22px` }}>
											Identifies potential ways an insider could threaten your
											organization
										</p>
										<ul className="ml-3">
											<li>Know what is at stake</li>
											<li>Align insider threat with business continuity</li>
											<li>Know your critical systems</li>
											<li>Trust but verify</li>
											<li>Prevent breaches</li>
										</ul>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="cyhy" className="page-content">
						<div className="container">
							<div className="row justify-content-center row-logos">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">Cyber Hygiene (CyHy)</h1>
								</ScrollAnimation>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<ScrollAnimation animateIn="fadeLeft" className="h-100">
										<img
											className="img-fluid"
											src={cyhy}
											alt="Red Team Assessments Solutions"
										/>
									</ScrollAnimation>
								</div>
								<div className="col-lg-6 col-md-6 order-2">
									<ScrollAnimation animateIn="fadeRight" className="h-100">
										<p style={{ fontSize: `22px` }}>
											Gray Tier’s own developed variety of proactive services
											which evaluates an organization’s external security
											posture
										</p>
										<ul className="ml-3">
											<li>
												Open Source Intelligence/Information Gathering (OSINT)
											</li>
											<li>Spear-Phishing, Pretexting Campaigns</li>
											<li>Continual Vulnerability Identification</li>
											<li>Dark Web, Credential Leaks, Domain Masquerading</li>
										</ul>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</section>
					<section id="siemaas" className="page-content">
						<div className="container">
							<div className="row justify-content-center row-logos">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<h1 className="mb-3">
										Security Information and Event Management as a Service
										(SIEMaaS)
									</h1>
								</ScrollAnimation>
							</div>
							<div className="row justify-content-center">
								<ScrollAnimation animateIn="fadeIn" className="h-100">
									<img
										className="img-fluid"
										src={SIEMAAS}
										alt="Security Information and Event Managementas a Service"
									/>
								</ScrollAnimation>
							</div>
						</div>
					</section>
				</div>
				<Overview />
			</Layout>
		)
	}
}

export default Capabilities

export const CapabilitiesQuery = graphql`
	query CapabilitiesQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Form from '../components/Form'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../components/particles'

class ContactPage extends React.Component {
	render() {
		const siteTitle = 'Contact'
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
									<h1 className="font-weight-bold">Contact</h1>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeIn" delay="1000">
									<h5 className="pt-3 font-weight-lighter text-white">
										Get in touch with us!
									</h5>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				<div className="page-content">
					<div className="container text-center">
						<div className="row justify-content-between contacts">
							<div className="col-md-2 mb-5 mb-md-0">
								<ScrollAnimation
									animateIn="fadeInDown"
									delay="0"
									scrollableParentSelector=".contacts"
								>
									<i className="fa fa-map-marker" />
									<h6 className="text-uppercase">Office 1</h6>
									<p className="lead">
										2800 Eisenhower Ave.
										<br />
										Suite 220
										<br />
										Alexandria, VA 22314
									</p>
								</ScrollAnimation>
							</div>
							<div className="col-md-2 mb-5 mb-md-0">
								<ScrollAnimation
									animateIn="fadeInDown"
									delay="0"
									scrollableParentSelector=".contacts"
								>
									<i className="fa fa-map-marker" />
									<h6 className="text-uppercase">Office 2</h6>
									<p className="lead">
										100 E. Pine Street,
										<br />
										Suite 110
										<br />
										Orlando, FL 32801
									</p>
								</ScrollAnimation>
							</div>
							<div className="col-md-2 mb-5 mb-md-0">
								<ScrollAnimation
									animateIn="fadeInDown"
									delay="250"
									scrollableParentSelector=".contacts"
								>
									<i className="fa fa-envelope-o" />
									<h6 className="text-uppercase">Email Address</h6>
									<p className="lead">
										<a href="mailto:info@graytier.com">info@graytier.com</a>
									</p>
								</ScrollAnimation>
							</div>
							<div className="col-md-2 mb-5 mb-md-0">
								<ScrollAnimation
									animateIn="fadeInDown"
									delay="500"
									scrollableParentSelector=".contacts"
								>
									<i className="fa fa-phone" />
									<h6 className="text-uppercase">Phone</h6>
									<p className="lead">
										<a href="tel:17032248952">703.224.8952</a>
									</p>
								</ScrollAnimation>
							</div>
							<div
								className="col-md-2 mb-5 mb-md-0"
								delay="750"
								scrollableParentSelector=".contacts"
							>
								<ScrollAnimation animateIn="fadeInDown">
									<i class="fa fa-fax" />
									<h6 className="text-uppercase">Fax</h6>
									<p className="lead">
										<a href="tel:17032248801">703.224.8801</a>
									</p>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				<div className="page-content py-0">
					<div className="container-fluid">
						<div className="row justify-content-between">
							<div className="col-md-6 bg-light text-center p-0">
								<div className="row">
									<div className="col-md-12">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.346940473629!2d-77.08390738514284!3d38.8016030795855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b198e56014bb%3A0x61536f7f3559acc!2s2800%20Eisenhower%20Ave%20%23220%2C%20Alexandria%2C%20VA%2022314%2C%20USA!5e0!3m2!1sen!2sph!4v1572319969656!5m2!1sen!2sph"
											width="100%"
											height="100%"
											frameBorder="0"
											title="map"
											style={{ minHeight: '370px' }}
										/>
									</div>
									<div className="col-md-12">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9539117645336!2d-81.37927498491942!3d28.541104982453987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77afdc8135afd%3A0x803674b7f0bdd1c0!2s100%20E%20Pine%20St%20%23110%2C%20Orlando%2C%20FL%2032801%2C%20USA!5e0!3m2!1sen!2sph!4v1582861149964!5m2!1sen!2sph"
											width="100%"
											height="100%"
											frameBorder="0"
											title="map"
											style={{ minHeight: '370px' }}
										/>
									</div>
								</div>
							</div>
							<div className="col-md-6 contact-col text-center">
								<div>
									<div className="pb-4">
										<h2 className="text-white">Send us a Message</h2>
										<p className="text-white">
											Fill out the form below and we'll be in touch soon.
										</p>
									</div>
									<Form
										form_name="contact"
										form_id="5db168c4cc9b735a4d8c3f30"
										form_classname="contact_form"
									>
										<div className="form-row">
											<div className="col-12 mb-3">
												<div className="form-group">
													<input
														className="form-control"
														type="text"
														name="Name"
														id="full_name"
													/>
													<label htmlFor="full_name">Name</label>
												</div>
											</div>
											<div className="col-12 mb-3">
												<div className="form-group">
													<input
														className="form-control"
														type="email"
														name="Email Address"
														id="email_address"
													/>
													<label htmlFor="email_address">Email address</label>
												</div>
											</div>
											<div className="col-12 mb-3">
												<div className="form-group">
													<input
														className="form-control"
														type="tel"
														name="phone_number"
														id="phone_number"
													/>
													<label htmlFor="email_address">Phone</label>
												</div>
											</div>
											<div className="col-12 mb-3">
												<div className="form-group">
													<textarea
														className="form-control"
														name="message"
														id="message"
													/>
													<label htmlFor="email_address">Message</label>
												</div>
											</div>
											<div className="col-1">
												<div className="centered-captcha mb-4 mx-auto">
													<div className="webriq-recaptcha" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<button
														className="btn btn-primary hvr-shadow"
														type="submit"
													>
														Submit
													</button>
												</div>
											</div>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}
export default ContactPage

export const ContactPageQuery = graphql`
	query ContactPageQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`

import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo-white.png'
import Form from '../components/Form'

const Footer = () => (
  <footer>
    <div className="footer bg-dark">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 col-lg-3 pr-lg-4 mb-3">
            <img
              className="img-fluid pb-4"
              src={Logo}
              alt="Gray Tier Technologies"
              width="250px"
            />
            <p className="text-muted pb-4">
              Founded in 2014, Gray Tier Technologies provides technology
              consulting services focused on solving the toughest cyber security
              challenges faced by government, commercial, and military
              organizations.
            </p>
            <div>
              <a
                className="social-link"
                href="https://facebook.com/GrayTierTechnologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                className="social-link"
                href=" https://twitter.com/graytier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com/graytiertechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/company/gray-tier-technologies-llc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 mb-3">
            <div>
              <h5 className="font-weight-bold text-white pb-3">
                Connect with Us
              </h5>
              <ul className="text-white-50 contact-details">
                <li className="address">
                  2800 Eisenhower Ave. Suite 220
                  <br />
                  Alexandria, VA 22314
                </li>
                <li className="email">
                  <a href="mailto:info@graytier.com">
                    <strong>info@graytier.com</strong>
                  </a>
                </li>
                <li className="phone">
                  <a href="tel:17032248952">703.224.8952</a>
                </li>
                <li className="fax">
                  <a href="tel:17032248801">703.224.8801</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-1 mb-3">
            <div>
              <h5 className="font-weight-bold text-white pb-3">Company</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Partners</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-1 mb-3">
            <div>
              <h5 className="font-weight-bold text-white pb-3">Resources</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">News</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div>
              <h5 className="font-weight-bold text-white mb-0">Newsletter</h5>
              <span className="d-block pb-3 text-white-50">
                Get our latest updates straight to your inbox!
              </span>
              <Form
                form_name="newsletter"
                form_id="5db168c2cc9b735a4d8c3f2f"
                form_classname="newsletter"
                action="/"
                method="post"
              >
                <div className="form-group">
                  <input
                    className="form-control mb-0"
                    type="email"
                    name="email_address"
                    required=""
                  />
                  <label>Enter your email address</label>
                </div>
                <div className="centered-captcha mb-3">
                  <div className="webriq-recaptcha" />
                </div>
                <div className="form-group mb-0">
                  <button className="btn btn-primary" type="submit">
                    <span>Subscribe</span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-muted copyright-section small">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-sm-left text-lg-left">
            <span>
              © 2019 Gray Tier Technologies, LLC. All rights reserved.
            </span>
          </div>
          <div class="col-md-6 text-center text-sm-right text-lg-right">
            <span>
              Designed and powered by{' '}
              <a
                href="http://webriq.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WebriQ
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

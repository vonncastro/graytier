import React from 'react'
import { Link } from 'gatsby'
import { Nav } from 'react-bootstrap'
import Collapsible from 'react-collapsible'

import './menu.css'

export default () => (
  <div className="navigation">
    <Nav className="flex-column">
      <ul className="navlist">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Collapsible trigger="Company">
            <ul className="submenu">
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
                <Collapsible trigger="Careers">
                  <ul className="submenu">
                    <li>
                      <Link to="/">Current Openings</Link>
                    </li>
                    <li>
                      <Link to="/">Benefits</Link>
                    </li>
                  </ul>
                </Collapsible>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Resources">
            <ul className="submenu">
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
      <div className="d-block d-md-none pt-4 text-center">
        <a className="btn btn-primary px-3" role="button" href="/">
          Get an Overview Today
        </a>
      </div>
      <div className="d-block text-center pt-3">
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
    </Nav>
  </div>
)

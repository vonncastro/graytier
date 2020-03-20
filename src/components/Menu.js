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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/who-we-are">Who We Are</Link>
              </li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/capabilities">Capabilities</Link>
              </li>
              <li>
                <Collapsible trigger={<Link to="/careers">Careers</Link>}>
                  <ul className="submenu">
                    <li>
                      <Link to="/careers/job-postings">Current Openings</Link>
                    </li>
                    <li>
                      <Link to="/careers/benefits">Benefits</Link>
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
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/data-sheets">Data Sheets</Link>
              </li>
              <li>
                <Link to="/white-papers">White Papers</Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible
            trigger={
              <Link title="Military & Federal" to="/military-federal">
                Military & Federal
              </Link>
            }
          >
            <ul className="submenu">
              <li>
                <Link to="/military-federal#contracts">Contracts</Link>
              </li>
              <li>
                <Link to="/military-federal#complianceSection">Compliance</Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="d-block d-md-none pt-4 text-center">
        <Link className="btn btn-primary px-3" role="button" to="/contact">
          Get an Overview Today
        </Link>
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

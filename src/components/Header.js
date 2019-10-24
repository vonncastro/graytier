import React from 'react'
import { Link } from 'gatsby'
import Sticky from 'react-sticky-el'
import SideBarMenu from './Sidebar'
import './header.css'

import Logo from '../images/logo.png'

const Header = () => (
  <header>
    <Sticky
      className="sticky-wrapper"
      stickyClassName="is-sticky"
      stickyStyle={{ transform: 'unset', zIndex: '2' }}
    >
      <div className="menu-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-9 col-md-4">
              <Link className="logo" to="/">
                <img
                  className="img-fluid header-logo"
                  src={Logo}
                  alt="Gray Tier Technologies"
                />
              </Link>
            </div>
            <div className="col-md-7 text-right d-none d-md-inline-block">
              <div className="header-cta">
                <a className="btn btn-primary" role="button" href="/">
                  Get an Overview Today
                </a>
              </div>
            </div>
            <div className="col-3 col-md-1 text-right">
              <SideBarMenu />
            </div>
          </div>
        </div>
      </div>
    </Sticky>
  </header>
)

export default Header

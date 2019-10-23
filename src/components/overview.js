import React from 'react'
import { Link } from 'gatsby'
import LogoImg from '../images/logo-img.png'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

class GetAnOverview extends React.Component {
  render() {
    return (
      <div className="overview">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn">
            <img className="mb-4" src={LogoImg} alt="Gray Tier" width="100px" />
            <h2 className="pb-4 font-body">
              Contact us for an overview of our capabilities and examples of how
              clients have benefited from our consultation.
            </h2>
            <Link
              className="btn btn-primary btn-lg btn-ripple"
              role="button"
              to="/"
            >
              Get an Overview Today
            </Link>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}

export default GetAnOverview

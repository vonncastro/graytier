import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../../components/particles'

class CareersPage extends React.Component {
  render() {
    const siteTitle = 'Careers'
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
                  <h1 className="font-weight-bold">Careers</h1>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <ScrollAnimation animateIn="fadeIn">
                  <h2 className="text-center pb-4">
                    Intrinsic Motivation Leads to Creative Excellence
                  </h2>
                  <p>
                    Can your job also be a hobby? We think it can! Research has
                    shown that students are more likely to reach higher academic
                    achievement and enjoyment if they:
                  </p>
                  <ul>
                    <li>
                      attribute results to factors they control (i.e., the
                      effort they put in),
                    </li>
                    <li>
                      find meaning and importance in reaching their goals, and
                    </li>
                    <li>
                      want to understand and master a topic, not just achieve
                      good grades.
                    </li>
                  </ul>
                  <p>
                    Why not apply the same concept to the workplace? Most
                    employers motivate extrinsically through the use of money,
                    coercion, and threat of punishment. Rather than focusing on
                    personal fulfillment and quality solutions, these companies
                    rely on extrinsic motivation and focus their employees on
                    bonuses and other rewards.
                  </p>
                  <p>
                    At Gray Tier we believe that innovative technology comes
                    from creativity, not financial rewards. Financial rewards
                    are the results of success, and not our WHY! We strive to
                    foster an environment that is focused on people motivated by
                    a challenge, just as an athlete may compete for the love of
                    the sport.
                  </p>
                  <p>
                    When a company commits to the intrinsic motivation rewards
                    model, then creative scientists and engineers can fulfill
                    their need to solve challenges and explore their curiosity.
                    Before leaving school and entering the workforce, most
                    talented computer scientists learn to program, or solve math
                    equations because they find them enjoyable. The motivation
                    comes from the excitement and feeling of achievement that
                    solving the problem provides. When the same motivation can
                    be found at work, intrinsically, then creative excellence
                    can be realized!
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <ScrollAnimation animateIn="fadeIn">
                  <h2 className="text-center pb-4">Family & Culture</h2>
                  <p>
                    Gray Tier Technologies, LLC. is deeply rooted in the
                    designing and implementing cyber security solutions to
                    assist network defenders. Gray Tier Technologies, LLC has 3
                    primary focuses:
                  </p>
                  <ul>
                    <li>
                      Threat Simulations through Advanced Persistent Threats
                      (APT) & Insider threat Network Penetration Testing,
                    </li>
                    <li>Cyber Intelligence</li>
                    <li>Research & Development </li>
                  </ul>
                  <p>
                    To be the best, we have to hire the best. We understand that
                    we nothing without our employees. For that we are 100%
                    focused on the welfare of our employees in all of our
                    decision making. All of our employees are 100% vested day 1.
                    Our benefits do not just focus on the employee but the
                    employees family as well. We highly encourage our employees
                    to interact with the InfoSec community. We highly encourage
                    our employees to discuss, brief, collaborate, interact on
                    social media, attend conferences on or about InfoSec. Gray
                    Tier Technologies, LLC will always strive to create an
                    atmosphere of personal development and growth within our
                    company culture.
                  </p>
                  <div className="pt-5 text-center">
                    <Link
                      className="btn btn-primary"
                      role="button"
                      to="/careers/job-postings"
                    >
                      See Job Openings
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CareersPage

export const careersPageQuery = graphql`
  query careersPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

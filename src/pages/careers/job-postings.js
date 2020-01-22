import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import HeroParticles from '../../components/particles'

class JobPostings extends React.Component {
  render() {
    const siteTitle = 'Job Postings'
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
                  <h1 className="font-weight-bold">Job Postings</h1>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <iframe
                  title="Job Postings"
                  id="BrzyHr_iframe"
                  width="610"
                  frameborder="0"
                  scrolling="no"
                  onload="window.scrollTo(0,0)"
                  allow="microphone; camera"
                  src="https://gray-tier-technologies.breezy.hr/embed/positions?bzsrc=true&amp;include_filters=true&amp;link_external=true&amp;no_pos_msg=true&amp;p=https://www.graytier.com/careers/job-postings/"
                  height="350"
                ></iframe>
                {/*
                <ScrollAnimation animateIn="fadeIn">
                  <iframe
                    src="https://www.indeedjobs.com/widget/s/9c1faa3cf95dddfe9e71?autoWidth=true&embeddedURL=https%3A%2F%2Fwww.graytier.com%2Fcareers%2Fjob-postings%2F&height=620&heightRaw=620&theme=light&width=750&widthRaw"
                    frameBorder="0"
                    title="jobs"
                    style={{
                      width: '100%',
                      height: '620px',
                      minWidth: '100%',
                      minHeight: '620px',
                      border: 'none',
                    }}
                  />
                </ScrollAnimation>
                */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default JobPostings

export const jobPostingsQuery = graphql`
  query jobPostingsQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

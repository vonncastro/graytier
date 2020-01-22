import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import HeroParticles from '../../components/particles'
import BreezyHR from '../../components/careers/breezyHR'

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
        <div className="page-content loading">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <LazyLoadComponent>
                  <BreezyHR />
                </LazyLoadComponent>
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

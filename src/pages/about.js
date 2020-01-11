import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
// import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <div>
          this page is still under construction. Thanks for being patient.
      </div>
      
      <div>
        <h3>Research Experience</h3>
        <hr />
        <section>
          <div>
              <span>Undergraduate Machine Learning Researcher at Informatics Skunkworks</span>
              <span>UW-Madison Department of Materials Science and Engineering</span> <span>Madison, WI</span></div>
          <p>
            I have fed alloy images to YOLOv3 network, detected the defects in the TEM videos, and tracked their number and size
            I have also calculated the generation and annealing and achieved high accuracy defects detection with 0.95 F1 and low latency
            This is the first deep learning project ever achieved for TEM videos that can be applied to research projects
          </p>
          <a href={`http://delta.khk.org/`}>Link to KHK</a>
        </section>

      </div>

      <div>
        <h3>Organization</h3>
        <hr />
        <section>
          <div><span>Kappa Eta Kappa Delta Chapter </span> <span>Madison, WI</span></div>
          <p>
            This is an Engineering Professional Fraternity. 
            As being the smallest minority, I have been leading people to learn about minorities and different cultures. 
            I have created an environment that people respect individuals with diverse backgrounds 
            and enriched the college experience for everyone.
          </p>
          <div>http://delta.khk.org/</div>
          <a href={`http://delta.khk.org/`}>Link to KHK</a>
        </section>
        <br />
        <section>
          <div><span>Bridge</span> <span>Madison, WI</span></div>
          <p>
              This is a Organization that connects domestic and international students. 
              I was in charge of leading teams and won a most active student award of the semester.
          </p>
          <a href={`https://bridge.iss.wisc.edu/`}>Link to Bridge</a>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

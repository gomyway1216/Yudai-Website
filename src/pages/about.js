import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
// import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <div>
          this page is still under construction. Thanks for being patient.
      </div>
      {/* <Contact /> */}
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

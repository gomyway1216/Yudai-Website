import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import FeaturedTours from "../components/Home/FeaturedTours"
import FeaturedProjects from "../components/Home/FeaturedProjects"
import FeaturedPosts from "../components/Home/FeaturedPosts"
import SEO from "../components/SEO"
export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Welcome to Yudai's Blog"
        info="My goal is to create platform that help people."
      >
        <AniLink fade to="/tours" className="btn-white">
          My projects
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <FeaturedProjects />
    <FeaturedPosts />
  </Layout>
)
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

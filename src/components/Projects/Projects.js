import React from "react"
// import TourList from "./TourList"
import ProjectList from "./ProjectList"
import { useStaticQuery, graphql } from "gatsby"

const getProjects = graphql`
  query {
	projects: allContentfulProjects(filter: {featured: {eq: true}}) {
    edges {
      node {
        contentful_id
        title
        shortDescription
        slug
        createdAt(formatString: "MMMM Do, YYYY ")
        category
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const Projects = () => {
  const { projects } = useStaticQuery(getProjects)

  return <ProjectList projects={projects} />
}

export default Projects

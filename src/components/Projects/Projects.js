import React from 'react'
// import TourList from "./TourList"
import ProjectList from './ProjectList'
import { useStaticQuery, graphql } from 'gatsby'

const getProjects = graphql`
  query {
    projects: allContentfulProjects(
      sort: { fields: completedAt, order: DESC }
    ) {
      edges {
        node {
          contentful_id
          title
          shortDescription
          slug
          completedAt
          category
          featured
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

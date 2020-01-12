import React from 'react'
import Tour from '../Tours/Tour'
import Project from '../Projects/Project'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getProjects = graphql`
  query {
    featuredProjects: allContentfulProjects(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          contentful_id
          title
          shortDescription
          slug
          completedAt
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

const FeaturedProjects = () => {
  const response = useStaticQuery(getProjects)
  const projects = response.featuredProjects.edges

  return (
    <section className={styles.projects}>
      <Title title="featured" subtitle="projects" />
      <div className={styles.center}>
        {projects.map(({ node }) => {
          //   return <Tour key={node.contentful_id} tour={node} />
          return <Project key={node.contentful_id} project={node} />
        })}
      </div>

      <AniLink fade to="/projects" className="btn-primary">
        All Projects
      </AniLink>
    </section>
  )
}

export default FeaturedProjects

import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/projects-home.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Project = ({ project }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const {
    title,
    shortDescription,
    slug,
    completedAt,
    category,
    images,
  } = project
  let mainImage = images ? images[0].fluid : img

  let date = new Date(completedAt)
  let formatted_date =
    date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear()

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single project" />
        <AniLink fade className={styles.link} to={`/project/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            {shortDescription || 'default project'}
          </h4>
          <div className={styles.details}>
            <h6 className={styles.category}>Category: {category}</h6>
            <h6>Created At {formatted_date}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    completedAt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Project

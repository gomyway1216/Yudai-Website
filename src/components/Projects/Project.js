import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
  const { title, shortDescription, slug, createdAt, category, images } = project
  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single project" />
        <AniLink fade className={styles.link} to={`/projects/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {shortDescription || "default project"}
          </h4>
          <div className={styles.details}>
            <h6>{category} days</h6>
            <h6>from ${createdAt}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    // name: PropTypes.string.isRequired,
    // country: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    // days: PropTypes.number.isRequired,
    // images: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
}

export default Project

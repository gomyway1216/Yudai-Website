import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/projects-home.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import TicTacToe from '../TicTacToe/Game'

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

const CustomProject = props => {
  const data = useStaticQuery(getImage)
  let mainImage = data.file.childImageSharp.fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single project" />

        <AniLink fade className={styles.link} to="/project/tic-tac-toe-react">
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>Tic-Tac-Toe</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>playable Tic-Tac-Toe</h4>
          <div className={styles.details}>
            <h6 className={styles.category}>Category: react</h6>
            <h6>Created At February 14</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CustomProject

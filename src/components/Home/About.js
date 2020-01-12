import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "profile_image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="profile picture"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>I am English&Japanese bilingual studying Computer Science.</h4>
          <p>Education</p>
          <p>
            Computer Science Major with Math and Entrepreneurship Minor from
            University of Wisconsin-Madison
          </p>
          <p>Work Experience</p>
          <p>Front-End Engineer/Data Science Intern at SMN | Tokyo, Japan</p>
          <p>
            Full-Stack Engineer at UW-Madison College of Engineering | Madison,
            WI
          </p>
          <p>Full Stack Engineer Intern at Kinetikos | Lisbon, Portugal</p>

          <AniLink fade to="/profile" className="btn-primary">
            more details
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About

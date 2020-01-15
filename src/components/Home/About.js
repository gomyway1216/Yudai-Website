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
          <h4>
            I am an English&Japanese bilingual studying Computer Science to be a
            Software Engineer.
          </h4>
          <div className={styles.educationWrapper}>
            <h3>Education</h3>
            <div className={styles.education}>
              <div>
                Computer Science Major with Math and Entrepreneurship Minor from
                University of Wisconsin-Madison
              </div>
              <div>Graduating on May 2020</div>
            </div>
          </div>

          <div className={styles.workWrapper}>
            <h3>Work Experience</h3>
            <div className={styles.work}>
              <div>
                <span className={styles.boldText}>
                  Front-End Engineer/Data Science Intern
                </span>
                at SMN | Tokyo, Japan
              </div>
              <div>
                <span className={styles.boldText}>Full-Stack Engineer</span> at
                UW-Madison College of Engineering | Madison, WI
              </div>
              <div>
                <span className={styles.boldText}>
                  Full Stack Engineer Intern
                </span>
                at Kinetikos | Lisbon, Portugal
              </div>
            </div>
          </div>

          <AniLink fade to="/profile" className="btn-primary">
            more details
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About

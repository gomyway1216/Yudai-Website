import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/SEO'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Title from '../components/Title'
import styles from '../css/profile.module.scss'
// import styles from '../../css/about.module.css'

const getProfileImage = graphql`
  query profileImage {
    profileImage: file(relativePath: { eq: "profile_image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Profile = ({ data }) => {
  const { profileImage } = useStaticQuery(getProfileImage)

  return (
    <Layout>
      <Title title="about" subtitle="me" />
      {/* <SEO title="About me" /> */}
      {/* <StyledHero img={data.contactBcg.childImageSharp.fluid} /> */}
      <div>
        this page is still under construction. Thanks for being patient.
      </div>

      <div className={styles.profile}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Img
              fluid={profileImage.childImageSharp.fluid}
              alt="profile picture"
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={[styles.introduction, styles.item].join(' ')}>
            <h2>Introduction</h2>

            <div>
              I am aiming to be an engineer and participating in the projects
              that help people. Thank you for visiting my website!
            </div>
            <br />
          </div>

          <div className={[styles.work, styles.item].join(' ')}>
            <h3>Work Experience</h3>
            <hr />
            <section>
              <div>
                <span>Full-Stack Engineer</span>
                <span>University of Wisconsin-Madison</span>
                <span>Madison, WI</span>
                <span>April 2019 - Present</span>
              </div>
              <p>
                Building the Front-End of a tutor scheduling system for students
                with the feature for managers to control the service
              </p>
            </section>
            <section>
              <div>
                <span>Front-End/Data Science Engineer Intern</span>
                <span>So-net Media Networks Corp</span>
                <span>Tokyo, Japan</span>
                <span>May 2019 - August 2019</span>
              </div>
              <p>
                Using React, Redux, Javascript, and TypeScript to develop a web
                platform that tracks companies online advertisement performances
                Researched machine learning models and tuned parameters to
                explore ways to improve the algorithm responsible for ad
                selection Created documents that explain Git, Bash, and coding
                syntax for other interns.
              </p>
            </section>
            <section>
              <div>
                <span>Full Stack Engineer Intern</span>
                <span>Kinetikos</span>
                <span>Lisbon Area, Portugal</span>
                <span>June 2018 - August 2018</span>
              </div>
              <p>
                Completed an intensive course in HTML, CSS, JavaScript,
                TypeScript, Node.js, jQuery, react.js,　GraphQL, Prisma. Built a
                Weather app, twitter clone, and recipe sharing app Implemented a
                health app which detects and records patients’ movements in
                addition to providing them with health questionnaires having TTS
                & STT functionality
              </p>
            </section>
            <section>
              <div>
                <span>Technology Help desk & Business management Intern</span>
                <span>ITA, Inc.</span>
                <span>Itasca, Illinois</span>
                <span>May 2018 - June 2018</span>
              </div>
              <p>
                Set up computers, a phone system, and network systems and
                checked security for local Japanese companies Helped 3 Japanese
                companies expand to the U.S. by providing translations and local
                business and legal knowledge Made an Android Application to
                teach interns about company practice
              </p>
            </section>
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>Research Experience</h3>
            <hr />
            <section>
              <div>
                <span>
                  Undergraduate Machine Learning Researcher at Informatics
                  Skunkworks
                </span>
                <span>
                  UW-Madison Department of Materials Science and Engineering
                </span>
                <span>Madison, WI</span>
                <span>Jan 2019 - May 2019</span>
              </div>
              <p>
                I have fed alloy images to YOLOv3 network, detected the defects
                in the TEM videos, and tracked their number and size I have also
                calculated the generation and annealing and achieved high
                accuracy defects detection with 0.95 F1 and low latency This is
                the first deep learning project ever achieved for TEM videos
                that can be applied to research projects
              </p>
              <a href={`https://skunkworks.engr.wisc.edu/`}>
                Link to UW-Madison Informatics Skunkworks
              </a>
            </section>
          </div>

          <div className={styles.organization}>
            <h3>Organization</h3>
            <hr />
            <section>
              <div>
                <span>Tech Lead</span>
                <span>Helios</span>
                <span>Madison, WI</span>
                <span>Jan 2018 - Present</span>
              </div>
              <p>
                Developing a dashboard that collects solar panel information and
                displays it throughout the university with fun metric Working on
                open sourcing the solar data for researchers and/or students to
                use as part of dashboard project
              </p>
            </section>
            <br />
            <section>
              <div>
                <span>Assistant Social Char & Photographer</span>
                <span>Kappa Eta Kappa Delta Chapter </span>
                <span>Madison, WI</span>
                <span>Jan 2018 - Present</span>
              </div>
              <p>
                This is an Engineering Professional Fraternity. As being the
                smallest minority, I have been leading people to learn about
                minorities and different cultures. I have created an environment
                that people respect individuals with diverse backgrounds and
                enriched the college experience for everyone.
              </p>
              <div>http://delta.khk.org/</div>
              <a href={`http://delta.khk.org/`}>Link to KHK</a>
            </section>
            <br />
            <section>
              <div>
                <span>Active Member</span>
                <span>Bridge</span>
                <span>Madison, WI</span>
                <span>Sep 2017 - May 2018</span>
              </div>
              <p>
                This is a Organization that connects domestic and international
                students. I was in charge of leading teams and won a most active
                student award of the semester.
              </p>
              <a href={`https://bridge.iss.wisc.edu/`}>Link to Bridge</a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile

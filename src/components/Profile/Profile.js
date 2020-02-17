import React from 'react'
import Layout from '../Layout'
import StyledHero from '../StyledHero'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../SEO'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Title from '../Title'
import styles from '../../css/profile.module.scss'

const Profile = props => {
  return (
    <div className={styles.profile}>
      <Title title="about" subtitle="me" />
      {/* <SEO title="About me" /> */}
      {/* <StyledHero img={data.contactBcg.childImageSharp.fluid} /> */}
      <div className={styles.profileMain}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Img
              fluid={props.profileImage.childImageSharp.fluid}
              alt="profile picture"
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={[styles.introduction, styles.item].join(' ')}>
            <h2>Introduction</h2>

            <div>
              My name is Yudai, and I’m an English/Japanese bilingual studying
              Computer Science, Mathematics, and Entrepreneurship at the
              University of Wisconsin-Madison.
              <br />
              <br />
              I had very little conversation skills in English when I initially
              came to the U.S, but have improved significantly since then. Much
              of my improvement comes from the involvement I've had with other
              organizations both on my college campus, and in Japan.
              <br />
              <br />
              On my college campus, I lead a tech team for a renewable energy
              organization and worked on ways to improve widespread knowledge of
              solar energy, as well as onboard and manage new members.
              <br />
              <br />
              In Tokyo, I volunteer with a venture group to write software to
              analyze and improve their social events. My experience in the U.S.
              has also allowed me to propose new ideas and perspectives to the
              Japanese business world.
              <br />
              <br />
              While I am unsure of my exact future endeavors, I do know that I
              want to continue to help other students before I graduate, and
              extend this to wherever I go from there.
              <br />
              <br />
              This blog is meant to be a collection of the thoughts and
              experiences I pick up along the way. I am passionate about
              full-stack engineering. I used React, Node.js, JavaScript, GraphQL
              for my personal projects (this blog included), as well as for my
              university job.
              <br />
              <br />
              I am currently looking for a new grad Software Engineering
              position in the United States. I am graduating in May 2020, I can
              start working right after that.
              <br />
              <br />I hope you would be reaching out to me. Links in the top
              right corner redirect to my social media. Thank you for visiting
              my website!
            </div>
            <br />
            <br />
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>Education</h3>
            <hr />
            <div className={styles.educationInfo}>
              <div className={styles.educationInfoMain}>
                <div className={styles.major}>
                  <span className={styles.boldText}>BS</span> in{' '}
                  <span className={styles.boldText}>Computer Science</span> with{' '}
                  <span className={styles.boldText}>Mathematics</span>,{' '}
                  <span className={styles.boldText}>Entrepreneurship</span>{' '}
                  minor
                </div>
                <div>
                  from{' '}
                  <span className={styles.boldText}>
                    University of Wisconsin-Madison
                  </span>
                </div>
              </div>
              <div className={styles.educationSubInfo}>
                <div>Madison, WI</div>
                <div>
                  GPA: <span className={styles.boldText}>3.8</span>/4.0
                </div>
                <div>Expected graduation: May 2020</div>
              </div>
            </div>
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>Programming Language</h3>
            <hr />

            <div>
              Advanced : <span className={styles.boldText}>Java</span>,{' '}
              <span className={styles.boldText}>React</span>,{' '}
              <span className={styles.boldText}>JavaScript</span>,
              <span className={styles.boldText}>GraphQL</span>,
              <span className={styles.boldText}>Java</span>, Node.js,
              express.js, Android, Python, HTML
              <br />
              Intermediate : TypeScript, MongoDB, CSS, C, C++, Git, XML, SQL, R,
              Bash
              <br />
              English & Japanese{' '}
              <span className={styles.boldText}>bilingual</span>
            </div>
          </div>

          <div className={[styles.work, styles.item].join(' ')}>
            <h3>Work Experience</h3>
            <hr />

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Full-Stack Engineer</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Venture Café Tokyo</div>
                  <span className={styles.duration}>
                    December 2019 -{' '}
                    <span className={styles.boldText}>Present</span>
                  </span>
                  <span className={styles.location}>Tokyo, Japan</span>
                </div>
              </div>
              <p>
                Developing beverage ordering system with basic CRUD functions
                and QR code check-in
                <br />
                <br />
                Creating web client using React, developing backend service with
                GraphQL and Nodejs
                <br />
                <br />
                For more information, please visit{' '}
                <AniLink
                  fade
                  className={styles.projectLink}
                  to={`/project/venture-cafe-tokyo-drink-system`}
                >
                  here
                </AniLink>
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Front-End Engineer Intern</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    So-net Media Networks (Sony)
                  </div>
                  <span className={styles.duration}>
                    May 2019 - August 2019
                  </span>
                  <span className={styles.location}>Tokyo, Japan</span>
                </div>
              </div>
              <p>
                Developed a web client which displays companies’ online
                advertisement performances using React, Redux, TypeScript
                <br />
                <br />
                Introduced to Python and Data Science via research to improve
                accuracy of company’s Ad selection machine learning model
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Front-End Engineer</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    UW-Madison College of Engineering
                  </div>
                  <span className={styles.duration}>
                    April 2019 -{' '}
                    <span className={styles.boldText}>Present</span>
                  </span>
                  <span className={styles.location}>Madison, WI</span>
                </div>
              </div>
              <p>
                Building thick UI client for tutor scheduling system which
                enables students to book sessions, and administrators to perform
                auditing using React and JavaScript
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Android Engineer Intern</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Kinetikos</div>
                  <span className={styles.duration}>
                    June 2018 - August 2018
                  </span>
                  <span className={styles.location}>Lisbon Area, Portugal</span>
                </div>
              </div>
              <p>
                Implemented a patient care Android app with features such as
                patient monitoring and patient engagement enhanced by text to
                speech using Java, SQL
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  Technology Help desk & Business management Intern
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>ITA, Inc.</div>
                  <span className={styles.duration}>May 2018 - June 2018</span>
                  <span className={styles.location}>Itasca, Illinois</span>
                </div>
              </div>
              <p>
                Set up computers, a phone system, and network systems and
                checked security for local Japanese companies
                <br />
                <br />
                Helped 3 Japanese companies expand to the U.S. by providing
                translations and local business and legal knowledge Made an
                Android Application to teach interns about company practice
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Private Tutor</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Self Employed</div>
                  <span className={styles.duration}>
                    May 2016 - August 2016
                  </span>
                  <span className={styles.location}>Tokyo, Japan</span>
                </div>
              </div>
              <p>
                Tutored a high school student by providing materials for high
                school exams Mostly focused on reviewing the class materials and
                homework for Math, Science, History, Reading Japanese, English
                classes
                <br />
                <br />
                Gave appropriate homework to prepare for midterm exams and final
                exams. The student's score increased from the bottom to the
                average among the same grade students
                <br />
                <br />
                Taught time management techniques and entrance exam strategies
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Professional Tutor</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Elve gakuin</div>
                  <span className={styles.duration}>
                    April 2016 - August 2016
                  </span>
                  <span className={styles.location}>Tokyo, Japan</span>
                </div>
              </div>
              <p>
                Prepared small groups of students for exams and tailored
                instructions to the students’ learning styles
                <br />
                <br />
                Tutored several subjects, including Math, Science, History,
                Reading Japanese, English and test-taking skills
              </p>
            </section>
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>Main Projects</h3>
            <hr />
            <AniLink fade className={styles.projectLinkAll} to={`/projects/`}>
              Please click here to see all the projects.
            </AniLink>
            <br />
            <br />
            <section>
              <div className={styles.information}>
                <div className={styles.position}>This Portfolio/Blog</div>
              </div>
              <p>
                Created fullstack portfolio and blog to share my experiences
                using React, GraphQL, GatsbyJS (this website is the one!)
              </p>
            </section>
            <section>
              <div className={styles.information}>
                <div className={styles.position}>Study Timer Android App</div>
              </div>
              <AniLink
                fade
                className={styles.projectLink}
                to={`/project/study-timer`}
              >
                Jump to the project page
              </AniLink>
              <p>
                Built virtual reward-based Android app for doing various daily
                activities using Java, SQL
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  Gomoku (Five in a Row of Tic Tac Toe) board Game Android App
                </div>
              </div>
              <AniLink
                fade
                className={styles.projectLink}
                to={`/project/gomoku`}
              >
                Jump to the project page
              </AniLink>
              <p>
                Released Gomoku for Android on Play Store with a custom AI with
                95% winning rate using Java
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Othello Game App</div>
              </div>
              <AniLink
                fade
                className={styles.projectLink}
                to={`/project/othello`}
              >
                Jump to the project page
              </AniLink>
              <p>
                Implemented Othello board game for command line with turnable AI
                using C++
              </p>
            </section>
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>Research Experience</h3>
            <hr />

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  Undergraduate Machine Learning Researcher at Informatics
                  Skunkworks
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    UW-Madison Department of Materials Science and Engineering
                  </div>
                  <span className={styles.location}>Madison, WI</span>
                </div>
              </div>
              <AniLink fade className={styles.projectLink} to={`/project/yolo`}>
                Jump to the project page
              </AniLink>
              <p>
                Performed data science using Python and MATLAB in deep learning
                research project regarding alloy defect detection, and achieved
                0.95 F1 scores using YOLOv3
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
              <div className={styles.information}>
                <div className={styles.position}>Tech Lead</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Helios</div>
                  <span className={styles.duration}>Jan 2018 - Jan 2019</span>
                  <span className={styles.location}>Madison, WI</span>
                </div>
              </div>
              <p>
                Developed a dashboard that collects solar panel information and
                displays it throughout the university with fun metric
                <br />
                <br />
                Working on open sourcing the solar data for researchers and/or
                students to use as part of dashboard project
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  Assistant Social Char & Photographer
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    Kappa Eta Kappa Delta Chapter
                  </div>
                  <span className={styles.duration}>
                    Jan 2018 - <span className={styles.boldText}>Present</span>
                  </span>
                  <span className={styles.location}>Madison, WI</span>
                </div>
              </div>
              <p>
                This is an Engineering Professional Fraternity. As being the
                smallest minority, I have been leading people to learn about
                minorities and different cultures.
                <br />I have created an environment that people respect
                individuals with diverse backgrounds and enriched the college
                experience for everyone.
              </p>
              <a href={`http://delta.khk.org/`}>Link to KHK</a>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Active Member</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Bridge</div>
                  <span className={styles.duration}>Sep 2017 - May 2018</span>
                  <span className={styles.location}>Madison, WI</span>
                </div>
              </div>
              <p>
                This is a Organization that connects domestic and international
                students.
                <br />I was in charge of leading teams and won a most active
                student award of the semester.
              </p>
              <a href={`https://bridge.iss.wisc.edu/`}>Link to Bridge</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

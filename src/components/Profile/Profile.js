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
              On my college campus I lead a tech team for a renewable energy
              organization, and worked on ways to improve widespread knowledge
              of solar energy, as well as onboard and manage new members.
              <br />
              <br />
              In Tokyo I volunteer with a venture group to write software to
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
              position.
              <br />
              <br />I hope you would be reaching out to me. Links in the top
              right corner redirect to my social media.Thank you for visiting my
              website!
            </div>
            <br />
            <a
              href="https://drive.google.com/uc?export=download&id=1qho_ioHcWKb5sfXr9mX3A3JLmV2cImKi"
              className={styles.resumeLink}
            >
              Direct download link of my resume
            </a>
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
              <span className={styles.boldText}>JavaScript</span>, TypeScript,
              Android, Python, C
              <br />
              Intermediate : GIT, C++, HTML, CSS, XML, SQL, Node.js, R, GraphQL,
              Amazon AWS, Bash
            </div>
          </div>

          <div className={[styles.work, styles.item].join(' ')}>
            <h3>Work Experience</h3>
            <hr />
            <section>
              <div className={styles.information}>
                <div className={styles.position}>Full-Stack Engineer</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    University of Wisconsin-Madison
                  </div>
                  <span className={styles.duration}>
                    April 2019 -{' '}
                    <span className={styles.boldText}>Present</span>
                  </span>
                  <span className={styles.location}>Madison, WI</span>
                </div>
              </div>
              <div className={styles.skills}>React, JS</div>
              <p>
                Building the Front-End of a tutor scheduling system for students
                with the feature for managers to control the service
                <br />
                <br />
                Rebuilding the middleware and backend API that handles the
                requests from the front-end server
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  Front-End/Data Science Engineer Intern
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    So-net Media Networks Corp
                  </div>
                  <span className={styles.duration}>
                    May 2019 - August 2019
                  </span>
                  <span className={styles.location}>Tokyo, Japan</span>
                  <div className={styles.skills}>
                    React, Redux, JS, TS, Python
                  </div>
                </div>
              </div>
              <p>
                Developed a web platform that tracks companies online
                advertisement performances using SMN’s DSP ad system
                <br />
                <br />
                Researched machine learning models and tuned parameters to
                explore ways to improve the algorithm responsible for ad
                selection
                <br />
                Created documents that explain Git, Bash, and coding syntax for
                other interns.
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  Full Stack Engineer Intern
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Kinetikos</div>
                  <span className={styles.duration}>
                    June 2018 - August 2018
                  </span>
                  <span className={styles.location}>Lisbon Area, Portugal</span>
                </div>
              </div>
              <div className={styles.skills}>React, JS, Java</div>
              <p>
                Completed an intensive course in HTML, CSS, JavaScript,
                TypeScript, Node.js, jQuery, react.js,　GraphQL. Built a Weather
                app, twitter clone, and recipe sharing app
                <br />
                <br />
                Implemented a health app which detects and records patients’
                movements in addition to providing them with health
                questionnaires having TTS & STT functionality
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
              <div className={styles.skills}>Java, Marketing, Japanese</div>
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
                <div className={styles.position}>Ambassador</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Venture Café Tokyo</div>
                  <span className={styles.duration}>
                    June 2019 - <span className={styles.boldText}>Present</span>
                  </span>
                  <span className={styles.location}>Tokyo, Japan</span>
                </div>
              </div>
              <div className={styles.skills}>
                React, Node.js, Javascript, GraphQL, MongoDB, Marketing
              </div>
              <p>
                Venture Cafe's mission is to connect innovators and creates the
                environment to help produce and accelerate future businesses. We
                hold a variety of studying sessions and social space every week.
                To maximize the operation, I am currently developing software
                that collects the name of participants and counts their beverage
                they drink at the bar inside the event. There are more
                functionalities added in the future.
                <br />
                For more information, please visit{' '}
                <a href={`https://venturecafetokyo.org/en/`}>
                  Venture Cafe Tokyo
                </a>
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
              <div className={styles.skills}>Tutoring</div>
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
              <div className={styles.skills}>Tutoring</div>
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
                <div className={styles.subInformation}>
                  <span className={styles.duration}>
                    December 2019 - Current
                  </span>
                  <div className={styles.skills}>
                    React, GraphQL, Gatsby.js, Contentful
                  </div>
                </div>
              </div>
              <p>
                A full-stack speedy website using Gatsby.js (this website is the
                one!)
                <br />
                <br />
                Data is saved in Contentful Headless CMS server and queried by
                frontend server with GraphQL
              </p>
            </section>
            <section>
              <div className={styles.information}>
                <div className={styles.position}>Study Timer Android App</div>
                <div className={styles.subInformation}>
                  <span className={styles.duration}>
                    December 2018 – February 2019
                  </span>
                  <div className={styles.skills}>Java, SQL, XML</div>
                </div>
              </div>
              <AniLink
                fade
                className={styles.projectLink}
                to={`/project/study-timer`}
              >
                Jump to the project page
              </AniLink>
              <p>
                Implemented an AI function to optimally win every game. 95%
                winning rate to players of various levels
                <br />
                <br />
                Board size, battle modes, and difficulty level are changeable,
                with undo function
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  Gomoku (Five in a Row of Tic Tac Toe) board Game Android App
                </div>
                <div className={styles.subInformation}>
                  <span className={styles.duration}>
                    August 2018 – September 2018
                  </span>
                  <div className={styles.skills}>Java, SQL, XML</div>
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
                A fun app that records the time of different types of daily
                activities to earn virtual money
                <br />
                <br />
                Shows how much virtual money is made daily with the detailed
                activity log
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Othello Game App</div>
                <div className={styles.subInformation}>
                  <span className={styles.duration}>April 2019 – May 2019</span>
                  <div className={styles.skills}>C++</div>
                </div>
              </div>
              <AniLink
                fade
                className={styles.projectLink}
                to={`/project/othello`}
              >
                Jump to the project page
              </AniLink>
              <p>
                Implemented an strong AI that detects and analyzes the board
                state
                <br />
                <br />
                The simple and reusable interface enables the developers to add
                different type of AI algorithms
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
                  <span className={styles.duration}>Jan 2019 - May 2019</span>
                  <span className={styles.location}>Madison, WI</span>
                </div>
              </div>
              <div className={styles.skills}>Python, MATLAB</div>
              <AniLink fade className={styles.projectLink} to={`/project/yolo`}>
                Jump to the project page
              </AniLink>
              <p>
                I have fed alloy images to YOLOv3 network, detected the defects
                in the TEM videos, and tracked their number and size I have also
                calculated the generation and annealing and achieved high
                accuracy defects detection with 0.95 F1 and low latency
                <br />
                <br />
                This is the first deep learning project ever achieved for TEM
                videos that can be applied to research projects
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

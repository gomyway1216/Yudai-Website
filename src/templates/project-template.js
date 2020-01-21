import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import Day from '../components/SingleTour/Day'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/SEO'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import BackgroundImage from 'gatsby-background-image'
import ImageModal from '../components/Modal/ImageModal'
// import ImageModal2 from '../components/Modal/ImageModal2'
// import ImageModal3 from '../components/Modal/ImageModal3'
// import ImageModal4 from '../components/Modal/ImageModal4'

const Template = ({ data }) => {
  const {
    title,
    images,
    description: { json },
    completedAt,
    category,
  } = data.project

  let date = new Date(completedAt)
  let formatted_date =
    date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear()

  const [mainImage, ...projectImages] = images

  const [modalOpen, setModalOpen] = useState(false)
  const [modalFluidImage, setModalFluidImage] = useState()

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return (
          <div className="rich">
            <h3>this is awesome image</h3>
            <img width="400" src={node.data.target.fields.file['en-US'].url} />
            <p>images provided by john doe</p>
          </div>
        )
      },
      'embedded-entry-block': node => {
        const { title, image, text } = node.data.target.fields

        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1>this is other post : {title['en-US']}</h1>
            <img
              width="400"
              src={image['en-US'].fields.file['en-US'].url}
              alt=""
            />
            {documentToReactComponents(text['en-US'])}
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      {/* <ImageModal show={true} /> */}
      <SEO title={title} />
      {/* <StyledHero img={mainImage.fluid} /> */}
      <div
        className={styles.topImageContainer}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setModalOpen(true)
          setModalFluidImage(mainImage.fluid)
        }}
      >
        <Img
          fluid={{ ...mainImage.fluid, aspectRatio: 1 }}
          alt="project image"
          className={styles.topImage}
          imgStyle={{ objectFit: 'contain' }}
        />
      </div>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {projectImages.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setModalOpen(true)
                    setModalFluidImage(item.fluid)
                  }}
                  className={styles.imageWrapper}
                >
                  <Img
                    key={index}
                    fluid={item.fluid}
                    alt="project image"
                    className={styles.image}
                    imgStyle={{ objectFit: 'contain' }}
                    // onClick={alert('clicled')}
                    //   imgStyle={{objectFit: 'contain'}}
                  />
                </div>
              )
            })}
          </div>
          <h2>{title}</h2>
          <div className={styles.info}>
            {/* <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p> */}
            <h4>
              {/* <FaMap className={styles.icon} /> */}
              Category: {category}
            </h4>
          </div>
          <h4>Created at : {formatted_date}</h4>
          {/* <p className={styles.desc}>{description}</p> */}

          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>

          {/* <h2>daily schedule</h2> */}
          {/* <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div> */}
          <AniLink fade to="/projects" className="btn-primary">
            back to projects
          </AniLink>
        </div>
      </section>
      <ImageModal
        open={modalOpen}
        handleOpen={() => setModalOpen(true)}
        handleClose={() => setModalOpen(false)}
        fluid={modalFluidImage}
      />
      {/* <ImageModal2
        open={modalOpen}
        handleOpen={() => setModalOpen(true)}
        handleClose={() => setModalOpen(false)}
        fluid={modalFluidImage}
      /> */}
      {/* <ImageModal3 fluid={modalFluidImage} open={modalOpen} /> */}
      {/* <ImageModal4
        open={modalOpen}
        handleOpen={() => setModalOpen(true)}
        handleClose={() => setModalOpen(false)}
        fluid={modalFluidImage}
      /> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: contentfulProjects(slug: { eq: $slug }) {
      title
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        json
      }
      completedAt
      category
    }

    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Template

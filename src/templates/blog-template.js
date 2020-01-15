import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { log } from 'util'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'

const Blog = ({ data }) => {
  const {
    title,
    image,
    slug,
    published,
    text: { json },
  } = data.post

  // for commenting on the post using disqus
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }

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
      <SEO title={title} />
      <div className={styles.topImageContainer}>
        <Img
          fluid={{ ...image.fluid, aspectRatio: 1 }}
          alt="project image"
          className={styles.topImage}
          imgStyle={{ objectFit: 'contain' }}
        />
      </div>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <DiscussionEmbed {...disqusConfig} />
          <AniLink
            fade
            to="/blog"
            // className="btn-primary"
            // className={styles.allPost}
            // style={{ textAlign: center }}
            className={'btn-primary {styles.center}' + styles.allPostButton}
          >
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      slug
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

export default Blog

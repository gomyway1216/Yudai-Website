import React from "react"
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BlogCard from "../Blog/BlogCard"

const getPosts = graphql`
  query {
    featuredPosts: allContentfulPost(filter: {featured: {eq: true}}) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY ")
          title
          slug
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedPosts = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.featuredPosts.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="posts" />
      <div className={styles.center}>
        {posts.map(({ node }) => {
          return <BlogCard key={node.contentful_id} blog={node} />
        })}
      </div>

      <AniLink fade to="/blogs" className={"btn-primary {styles.center}" + styles.center} >
        All Posts
      </AniLink>
    </section>
  )
}

export default FeaturedPosts

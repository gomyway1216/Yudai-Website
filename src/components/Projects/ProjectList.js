import React, { Component } from 'react'
import styles from '../../css/items.module.css'
// import Tour from "./Tour"
import Project from './Project'
import Title from '../Title'

export default class ProjectList extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects.edges.sort((a, b) => {
        const aDate = new Date(a.node.completedAt)
        const bDate = new Date(b.node.completedAt)
        const aFeatured = a.node.featured
        const bFeatured = b.node.featured

        if ((aFeatured && bFeatured) || (!aFeatured && !bFeatured)) {
          return bDate - aDate
        } else {
          if (aFeatured) {
            return -1
          } else {
            return 1
          }
        }
      }),
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="My" subtitle="projects" />
        <div className={styles.center}>
          {this.state.projects.map(({ node }) => {
            return <Project key={node.contentful_id} project={node} />
          })}
        </div>
      </section>
    )
  }
}

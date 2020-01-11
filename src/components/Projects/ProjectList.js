import React, { Component } from "react"
import styles from "../../css/items.module.css"
// import Tour from "./Tour"
import Project from "./Project"
import Title from "../Title"

export default class ProjectList extends Component {
  state = {
    projects: [],
    sortedProjects: [],
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects.edges,
      sortedProjects: this.props.projects.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="My" subtitle="projects" />
        <div className={styles.center}>
          {this.state.sortedProjects.map(({ node }) => {
            return <Project key={node.contentful_id} project={node} />
          })}
        </div>
      </section>
    )
  }
}

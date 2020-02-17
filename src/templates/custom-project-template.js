import React, { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../css/template.module.css'
import SEO from '../components/SEO'
import TicTacToe from '../components/TicTacToe/Game'

const CustomProjectTemplate = props => {
  return (
    <Layout>
      <SEO title="Tic Tac Toe with AI" />
      <section className={styles.template}>
        <div className={styles.center}>
          <TicTacToe />
        </div>
      </section>
    </Layout>
  )
}

export default CustomProjectTemplate

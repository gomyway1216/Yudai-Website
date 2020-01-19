// src/templates/InstaModalPost/index.jsx

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled } from 'theme-ui'
import { graphql, navigate, PageRenderer } from 'gatsby'
import Img from 'gatsby-image'
import Modal from 'react-modal'

// import { Times, Heart, Comment } from '../../components/Icons'

// import './style.css'

Modal.setAppElement(`#___gatsby`)

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '960px',
    margin: '32px auto',
    padding: 0,
    border: 0,
  },
}

const InstaPostTemplate = props => {
  // Modal stuff.
  const { fluid, open } = props
  console.log(fluid)
  console.log('open', open)
  const [modalOpen, setModalOpen] = useState(open)
  console.log('modalOpen', modalOpen)
  const modalCloseTimeout = 300
  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => navigate(`/`), modalCloseTimeout)
  }
  return (
    <div>
      <PageRenderer key={'/'} location={{ pathname: '/' }} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
        closeTimeoutMS={modalCloseTimeout}
      >
        <Styled.root>
          <div
            sx={{
              bg: 'background',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {fluid !== undefined && <Img fluid={fluid} isOpen={modalOpen} />}
          </div>
        </Styled.root>
      </Modal>
    </div>
  )
}

export default InstaPostTemplate

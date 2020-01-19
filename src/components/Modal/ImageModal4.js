import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled } from 'theme-ui'
import { graphql, navigate, PageRenderer } from 'gatsby'
import Img from 'gatsby-image'
import ReactModal from 'react-modal'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

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

const ImageModal = ({ open, handleOpen, handleClose, fluid }) => {
  // Modal stuff.
  //   const [modalOpen, setModalOpen] = useState(true)
  const modalCloseTimeout = 300
  //   const closeModal = () => {
  //     handleClose
  //     setTimeout(() => navigate(`/projects`), modalCloseTimeout)
  //   }
  return (
    <div>
      <button onClick={handleOpen}>Trigger Modal</button>
      <ReactModal
        isOpen={open}
        contentLabel="onRequestClose Example"
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
      >
        <p>Modal text!</p>
        <button onClick={handleClose}>Close Modal</button>
      </ReactModal>
    </div>
  )
}

export default ImageModal

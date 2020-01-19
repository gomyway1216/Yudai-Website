import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled } from 'theme-ui'
import { graphql, navigate, PageRenderer } from 'gatsby'
import Img from 'gatsby-image'
import Modal from 'react-modal'

// import { Times, Heart, Comment } from '../../components/Icons'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
      <PageRenderer key={'/'} location={{ pathname: '/' }} />
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={modalStyles}
        contentLabel="Modal"
        closeTimeoutMS={modalCloseTimeout}
        shouldCloseOnOverlayClick={true}
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
            <Img fluid={fluid} />
            {/* <div sx={{ mt: 3, px: [3, 4] }}>
              <small sx={{ mr: 3 }}>
                <Heart sx={{ color: 'secondary', fontSize: 3 }} /> {likes}
              </small>
              <small sx={{ mr: 3 }}>
                <Comment sx={{ color: 'secondary', fontSize: 3 }} /> {comments}
              </small>
            </div> */}
            {/* <p sx={{ my: 4, px: [3, 4] }}>{caption}</p> */}
            <button onClick={handleClose}>close</button>
          </div>
        </Styled.root>
      </Modal>
    </div>
  )
}

// InstaPostTemplate.propTypes = {
//   data: PropTypes.shape({
//     instaNode: PropTypes.shape({
//       caption: PropTypes.string.isRequired,
//       comments: PropTypes.number.isRequired,
//       id: PropTypes.string.isRequired,
//       likes: PropTypes.number.isRequired,
//       localFile: PropTypes.shape({
//         childImageSharp: PropTypes.shape({ fluid: PropTypes.object.isRequired })
//           .isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// }

export default ImageModal

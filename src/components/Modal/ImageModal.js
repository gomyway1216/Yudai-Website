import React, { useState } from 'react'
import Img from 'gatsby-image'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import styles from '../../css/image-modal.module.css'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const ImageModal = props => {
  console.log(props.show)
  // const [show, setShow] = useState(props.show)
  const classes = useStyles()
  const { open, handleClose, handleOpen, fluid } = props

  console.log('fluid image')
  console.log(fluid)

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.imageWrapper}>
            {fluid !== undefined && (
              <Img
                fluid={fluid}
                alt="project image"
                className={styles.image}
                imgStyle={{ objectFit: 'contain' }}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default ImageModal

import React from 'react'
import ReactDOM from 'react-dom'
import classes from './modal.module.css'

const Backdrop = ({removeModal}) => {
  return (
    <div className={classes.backdrop}
         onClick={removeModal}/>
  )
}

const ModalOverlay = ({children, modalClass}) => {
  return (
    <div className={modalClass + ' ' + classes.open}>
      {children}
    </div>
  )
}

const Modal = ({children, removeModal, modalClass}) => {
  const portal$ = document.querySelector('#overlays')

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop removeModal={removeModal}/>, portal$)
      }
      {ReactDOM.createPortal(
        <ModalOverlay modalClass={modalClass}>
          {children}
        </ModalOverlay>, portal$)
      }
    </>
  )
}

export default Modal

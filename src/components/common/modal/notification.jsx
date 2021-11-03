import React from 'react'
import styles from './modal.module.css'
import Modal from './modal'

const Notification = ({children, onCancel, ...rest}) => {
  return (
    <Modal modalClass={styles.modalNotification}
           removeModal={onCancel}>
      {/*<div {...{onCancel, ...rest}}>*/}
      {children}
    </Modal>
  )
}

export default Notification

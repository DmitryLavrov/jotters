import React from 'react'
import styles from './modal.module.css'
import Modal from './modal'

const Notification = ({children, onCancel}) => {
  return (
    <Modal modalClass={styles.modalNotification}
           removeModal={onCancel}>
      {children}
    </Modal>
  )
}

export default Notification

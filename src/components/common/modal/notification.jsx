import React from 'react'
import styles from './modal.module.css'
import Modal from './modal'

const Notification = ({children, onCancel, ...rest}) => {
  return (
    <Modal modalClass={styles.modalDeleteJotter}
           removeModal={onCancel}>
      <div {...{onCancel, ...rest}}>
        {children}
      </div>
    </Modal>
  )
}

export default Notification

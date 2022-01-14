import React from 'react'

import Modal from './modal'

const Notification = ({children, onCancel}) => {
  return (
    <Modal modalClass='modal-notification'
           removeModal={onCancel}>
      {children}
    </Modal>
  )
}

export default Notification

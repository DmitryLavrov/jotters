import React from 'react'
import Modal from './modal'
import classes from './modal.module.css'

const Sidebar = ({isMobile = false, hideSidebar, children}) => {
  return isMobile
    ?
    <Modal modalClass={classes.mobileSidebar}
           removeModal={hideSidebar}>
      <div className="d-flex flex-column pt-5 px-md-5 px-3">
        {children}
      </div>
    </Modal>
    :
    <div className="d-flex flex-column">
      {children}
    </div>
}

export default Sidebar

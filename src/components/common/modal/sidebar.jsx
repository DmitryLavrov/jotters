import React from 'react'

import Modal from './modal'

const Sidebar = ({isMobile = false, hideSidebar, children}) => {
  return isMobile
    ?
    <Modal modalClass="sidebar mobile"
           removeModal={hideSidebar}>
        {children}
    </Modal>
    :
    <div className="sidebar">
      {children}
    </div>
}

export default Sidebar

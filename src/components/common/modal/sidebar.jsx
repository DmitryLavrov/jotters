import React from 'react'

import Modal from './modal'

const Sidebar = ({isMobile = false, hideSidebar, children}) => {
  return isMobile
    ?
    <Modal modalClass="mobile-sidebar"
           removeModal={hideSidebar}>
        {children}
    </Modal>
    :
    <>
      {children}
    </>
}

export default Sidebar

import React from 'react'

import Modal from './modal'

const Sidebar = ({isMobile = false, hideSidebar, children}) => {
  return isMobile
    ?
    <Modal modalClass='sidebar mobile'
           removeModal={hideSidebar}>
      {/*<div className="mobile-sidebar__content">*/}
        {children}
      {/*</div>*/}
    </Modal>
    :
    <div className="d-flex flex-column">
      {children}
    </div>
}

export default Sidebar

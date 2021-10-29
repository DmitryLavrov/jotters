import React, { useEffect, useState } from 'react'
import Navbar from '../ui/navbar'

const Layout = ({children, ...rest}) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992)

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 992)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  const [clonedSidebar, clonedPage] = React.Children.map(children, child => (
    React.cloneElement(child, {...child.props}))
  )

  const navSidebar = (hideSidebar) =>
    React.cloneElement(clonedSidebar, {
      ...clonedSidebar.props,
      isMobile: true,
      hideSidebar: hideSidebar})

  return (
    <div className="container">
      <Navbar navSidebar={navSidebar} {...rest}/>

      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-lg-block col-lg-4 col-xl-3 py-2">
            {isDesktop && clonedSidebar}
          </div>

          <div className="col-md-12 col-lg-8 col-xl-9 py-2">
            {clonedPage}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout

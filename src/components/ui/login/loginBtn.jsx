import React from 'react'

import DropdownBtn from '../../common/form/dropdownBtn'
import useLoginDropdown from '../../../hooks/useLoginDropdown'

const LoginBtn = () => {
  const {paramsDropdownBtn, renderLoginCard} = useLoginDropdown()

  return (<>
    <div className="position-relative text-light" style={{marginRight: '2rem'}}>
      <span style={{marginRight: '2rem'}}>{paramsDropdownBtn.label}</span>
      <DropdownBtn params={paramsDropdownBtn}/>
    </div>

    {renderLoginCard}
  </>)
}

export default LoginBtn

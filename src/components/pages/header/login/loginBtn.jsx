import React from 'react'

import DropdownBtn from '../../../forms/formElements/dropdownBtn'
import useLoginDropdown from '../../../../hooks/useLoginDropdown'

const LoginBtn = () => {
  const {paramsDropdownBtn, renderLoginCard} = useLoginDropdown()

  return (
    <>
      <div className="header__user-name">
        {paramsDropdownBtn.label}
      </div>
      <DropdownBtn params={paramsDropdownBtn}/>

      {renderLoginCard}
    </>)
}

export default LoginBtn

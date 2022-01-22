import React from 'react'

import DropdownBtn from '../../common/form/dropdownBtn'
import useLoginDropdown from '../../../hooks/useLoginDropdown'

const LoginBtn = () => {
  const {paramsDropdownBtn, renderLoginCard} = useLoginDropdown()

  return (<>
    {/*<div className="login-block">*/}
      <div className="header__user-name">
        {paramsDropdownBtn.label}
      </div>
      <DropdownBtn params={paramsDropdownBtn}/>
    {/*</div>*/}

    {renderLoginCard}
  </>)
}

export default LoginBtn

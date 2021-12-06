import React from 'react'

import DropdownBtn from '../../common/form/dropdownBtn'
import useLoginDropdown from '../../../hooks/useLoginDropdown'
import useUsers from '../../../hooks/useUsers'

const LoginBtn = () => {
  const {getCurrentUser} = useUsers()
  const {paramsDropdownBtn, renderLoginCard} = useLoginDropdown(getCurrentUser, handleSignIn)



  function handleSignIn(user) {
    // =========================
    console.log('SignIn user:', user)
    // =========================
  }

  return (<>
    <div className="position-relative text-light" style={{marginRight: '2rem'}}>
      <span style={{marginRight: '2rem'}}>{paramsDropdownBtn.label}</span>
      <DropdownBtn params={paramsDropdownBtn}/>
    </div>

    {renderLoginCard}
  </>)
}

export default LoginBtn

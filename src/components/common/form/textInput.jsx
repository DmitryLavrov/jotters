import React, { useState } from 'react'

const TextInput = ({name, label, type = 'text', value, onChange, error}) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputClasses = 'form-control' + (error ? ' is-invalid' : '')

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  const handleChange = (event) => {
    onChange({name: event.target.name, value: event.target.value})
  }

  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input name={name} id={name} type={showPassword ? 'text' : type} value={value} onChange={handleChange}
               className={inputClasses}/>
        {type === 'password' &&
        <button className="btn btn-outline-secondary" type="button" onClick={toggleShowPassword}>
          <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}/>
        </button>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}

export default TextInput

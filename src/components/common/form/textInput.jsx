import React, { useState } from 'react'

const TextInput = ({name, label, type = 'text', value, onChange, error}) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  const handleChange = (event) => {
    onChange({name: event.target.name, value: event.target.value})
  }

  return (
    <div className="field has-validation">
      <input name={name}
             id={name}
             type={showPassword ? 'text' : type}
             value={value}
             placeholder={label}
             onChange={handleChange}
             className={'field__input' + (error ? ' is-invalid' : '')}/>

      <label htmlFor={name} className="field__label">
        {label}
      </label>

      {type === 'password' &&
      <button className="btn btn--secondary"
              type="button"
              onClick={toggleShowPassword}>
        <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}/> // todo !!!!!!!!!!!!!!!!!
      </button>}

      {error &&
      <div className="invalid-feedback">
        {error}
      </div>}
    </div>
  )
}

export default TextInput

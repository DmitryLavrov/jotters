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
      <label htmlFor={name} className="text-input__label">
        {label}
      </label>

      <div className="text-input has-validation">
        <input name={name}
               id={name}
               type={showPassword ? 'text' : type}
               value={value}
               placeholder={label}
               onChange={handleChange}
               className={inputClasses}/>

        {type === 'password' &&
        <button className="btn btn--secondary"
                type="button"
                onClick={toggleShowPassword}>
          <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}/> // todo !!!!!!!!!!!!!!!!!
        </button>}

        {error && <div className="invalid-feedback">{error}</div>}
      </div>

    </div>
  )
}

export default TextInput

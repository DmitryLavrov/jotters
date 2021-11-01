import React from 'react'

const Radio = ({name, title, onChange, radioButtons}) => {
  return (
    <>
      <h4 className="mt-3">
        {title}
      </h4>

      {radioButtons.map(r => (
        <div key={r.value} className="form-check">
          <input name={name}
                 value={r.value}
                 checked={r.checked}
                 onChange={onChange}
                 type="radio"
                 className="form-check-input"
                 id={name + r.value}/>
          <label className="form-check-label"
                 htmlFor={name + r.value}>
            {r.label}
          </label>
        </div>
      ))}
    </>
  )
}

export default Radio

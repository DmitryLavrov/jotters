import React from 'react'

const Radio = ({name, label, onChange, radioButtons}) => {
  const handleChange = (event) => {
    onChange({
      name: event.target.name,
      value: event.target.value
    })
  }

  return (
    <>
      <h4 className="mt-3">
        {label}
      </h4>

      {radioButtons.map(r => (
        <div key={r.value} className="form-check">
          <input name={name}
                 value={r.value}
                 checked={r.checked}
                 onChange={handleChange}
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

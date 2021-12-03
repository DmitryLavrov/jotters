import React from 'react'

const Checkbox = ({name, label, onChange, checkboxItems=[]}) => {
  const handleChange = (event) => {
    onChange({
      name: event.target.id,
      value: event.target.checked
    })
  }

  return (
    <>
      <h4 className="mt-3">
        {label}
      </h4>

      {checkboxItems.map(c => (
        <div key={c._id} className="form-check">
          <input name={name}
                 value=""
                 checked={c.selected}
                 onChange={handleChange}
                 type="checkbox"
                 className="form-check-input"
                 id={c._id}/>
          <label className="form-check-label"
                 htmlFor={c._id}>
            {c.name}
          </label>
        </div>
      ))}
    </>
  )
}

export default Checkbox

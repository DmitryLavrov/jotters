import React, { useEffect, useRef, useState } from 'react'
import classes from './form.module.css'

const DropdownBtn = ({params}) => {
  const {img, title, onClick, items} = params
  const [open, setOpen] = useState(false)
  const dropdown = useRef(null)

  const handleClickOutside = event => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleSelect = (action) => {
    setOpen(false)
    onClick(action)
  }

  return (
    <span className={classes.dropdown + (open ? (' ' + classes.z) : '')} ref={dropdown}>
      <button className={classes.dropdownBtn}
              type="button"
              onClick={() => setOpen(!open)}>
        {img}
      </button>

      <ul className={classes.dropdownMenu + (open ? (' ' + classes.show) : '')}>
        <li className={classes.dropdownTitle}>
          <span>
            {title}
          </span>
        </li>

        {items.map(({action, title, img, disabled}) =>
          <li key={action}
              className={classes.dropdownItem}>
            <button className={classes.dropdownItemBtn + (disabled ? (' ' + classes.disabled) : '')}
                    onClick={() => handleSelect(action)}
                    disabled={disabled}>
              <div>
                {img}
                <span>{title}</span>
              </div>
            </button>
          </li>
        )}
      </ul>
    </span>
  )
}

export default DropdownBtn

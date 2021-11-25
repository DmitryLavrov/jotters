import React, { useEffect, useRef, useState } from 'react'
import classes from './form.module.css'

const DropdownBtn = ({paramsBtnSettings}) => {
  const {img, position, title, items} = paramsBtnSettings
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

  const handleSelect = (onClick, action) => {
    setOpen(false)
    onClick(action)
  }

  return (
    <span className={classes.dropdown} ref={dropdown}>
      <button className={classes.dropdownBtn + ' ' + (position === 'absolute' ? classes.absolute : classes.static)}
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

        {items.map(({action, title, img, onClick, disabled}) =>
          <li key={action}
              className={classes.dropdownItem}>
            <button className={classes.dropdownItemBtn + (disabled ? (' ' + classes.disabled) : '')}
                    onClick={() => handleSelect(onClick, action)}
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

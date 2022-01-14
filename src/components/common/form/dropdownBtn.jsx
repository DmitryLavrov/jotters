import React, { useEffect, useRef, useState } from 'react'

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
    <span className={'dropdown' + (open ? (' dropdown--z') : '')} ref={dropdown}>
      <button className={'dropdown__btn'}
              type="button"
              onClick={() => setOpen(!open)}>
        {img}
      </button>

      <ul className={'dropdown__menu' + (open ? (' dropdown__menu--show') : '')}>
        <li className="dropdown__title">
          <span>
            {title}
          </span>
        </li>

        {items.map(({action, title, img, disabled}) =>
          <li key={action}
              className="dropdown-item">
            <button className={'dropdown-item__btn' + (disabled ? ' dropdown-item__btn--disabled' : '')}
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

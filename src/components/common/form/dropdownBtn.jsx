import React, { useEffect, useRef, useState } from 'react'
import classes from './form.module.css'

const DropdownBtn = ({name, image, title, items}) => {
  const [open, setOpen] = useState(false)
  const dropdown = useRef(null);

  const handleClickOutside = event => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleSelect = (onClick, action) => {
    setOpen(false)
    onClick(action)
  }

  return (
    <span className={classes.dropdown} ref={dropdown}>
      <button className={classes.dropdownBtn}
              type="button"
              onClick={() => setOpen(!open)}>
        <span>
          <img src={image} alt={name} height="24px" className={classes.dropdownImg}/>
        </span>
      </button>

      {/*{open && (*/}
      <ul className={classes.dropdownMenu + (open ? (' ' + classes.show) : '')}>
        <li className={classes.dropdownTitle}>
          <span>
            {title}
          </span>
        </li>

        {items.map(({action, name, itemImg, onClick, disabled}) =>
          <li key={action}
              className={classes.dropdownItem}>
            <button className={classes.dropdownItemBtn}
                    onClick={() => handleSelect(onClick, action)}
                    disabled={disabled}>
              {itemImg &&
                <span className={classes.dropdownItemBtnImg}
                      style={{opacity: disabled ? 0.5 : 1}}>
                   <img src={itemImg} alt={name} height="24px"/>
                </span>
              }
              {name}
            </button>
          </li>
        )}
      </ul>
      {/*)}*/}
    </span>
  )
}

export default DropdownBtn

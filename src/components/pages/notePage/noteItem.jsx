import React from 'react'
import {NavLink, useParams} from 'react-router-dom'

const NoteItem = ({note, onHideMobileSideBar}) => {
  const {jotterId} = useParams()

  return (
    <li className={'nav-item  d-flex justify-cont w-100'}>
      <NavLink to={`/jotters/${jotterId}/${note._id}`}
               className={'nav-link flex-fill text-primary text-truncate'}
               onClick={onHideMobileSideBar}>
        {/*<div className="text-primary text-truncate me-auto">*/}
          {note.title}
        {/*</div>*/}
      </NavLink>

    </li>
  )
}

export default NoteItem

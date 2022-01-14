import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const NoteItem = ({note, onHideMobileSideBar}) => {
  const {jotterId} = useParams()

  return (
    <li className='note-item'>
      <NavLink to={`/jotters/${jotterId}/${note._id}`}
               className={'note-item__link' + (note.public ? ' note-item__link--public' : '')}
               onClick={onHideMobileSideBar}>
        {note.title}
      </NavLink>

    </li>
  )
}

export default NoteItem

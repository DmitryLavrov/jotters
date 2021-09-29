import React from 'react'
import {NavLink, useParams} from 'react-router-dom'

const NoteItem = ({note, selected}) => {
  const {jotterId} = useParams()

  return (
    <li className={'nav-item'}>
    <NavLink to={`/jotters/${jotterId}/${note._id}`} className={'nav-link d-flex' + (selected ? ' active-note' : '')}>
      <div className="text-primary text-truncate me-auto">{note.title}</div>
      <div className="text-primary ms-3"><i className="bi bi-arrow-left-right"/></div>
      <div className="text-danger ms-3"><i className="bi bi-x-circle-fill"/></div>
    </NavLink>
    </li>
  )
}

export default NoteItem

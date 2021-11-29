import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const NoteItem = ({note, onHideMobileSideBar}) => {
  const {jotterId} = useParams()

  return (
    <li className={'nav-item  d-flex justify-cont w-100'}>
      <NavLink to={`/jotters/${jotterId}/${note._id}`}
               className={'nav-link flex-fill text-primary text-truncate'}
               onClick={onHideMobileSideBar}
               // style={{outline: note.public ? 'dotted lightblue' : 'none', boxShadow: note.public ?  '0 0 4px 2px rgba(255, 0, 0, 0.14)' : 'none'}}>
               style={{boxShadow: note.public ?  '0 0 4px 4px rgba(255, 0, 0, 0.3)' : 'none'}}>
        {/*<div className="text-primary text-truncate me-auto">*/}
        {note.title}
        {/*</div>*/}
      </NavLink>

    </li>
  )
}

export default NoteItem

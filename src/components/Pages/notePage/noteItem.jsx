import React from 'react'
import {NavLink, useParams} from 'react-router-dom'

const NoteItem = ({note, selected, deleteNote, onHideMobileSideBar}) => {
  const {jotterId} = useParams()

  return (
    <li className={'nav-item  d-flex justify-content-between'}>
      <NavLink to={`/jotters/${jotterId}/${note._id}`}
               className={'nav-link' + (selected ? ' active-note' : '')}
               onClick={onHideMobileSideBar}>
        <div className="text-primary text-truncate me-auto">
          {note.title}
        </div>
      </NavLink>

      <div className="d-flex align-items-center">
        <button className="btn btn-link ms-3">
           {/*todo*/}
          <span className="bi bi-arrow-left-right"/>
        </button>
        <button className="btn btn-link text-danger ms-3" onClick={() => deleteNote(note._id)}>
           {/*todo*/}
          <span className="bi bi-x-circle-fill"/>
        </button>
      </div>
    </li>
  )
}

export default NoteItem

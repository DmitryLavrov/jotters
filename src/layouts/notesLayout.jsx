import React, {useEffect, useState} from 'react'
import NotesSidebar from '../components/Pages/notePage/notesSidebar'
import NotePage from '../components/Pages/notePage/notePage'
import {useParams} from 'react-router-dom'
import API from '../api'
import Layout from '../components/common/layout'

const NotesLayout = () => {
  const [jotter, setJotter] = useState()
  const [selectedNote, setSelectedNote] = useState()

  const {jotterId, noteId} = useParams()

  useEffect(() => {
    API.jotters.getById(jotterId).then((data) => setJotter(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    selectNote(noteId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId])

  const selectNote = (id) => {
    // if (jotter) {
      API.notes.getById(noteId).then(data => setSelectedNote(data))
      // setSelectedNote(jotter.notes.find(note => note._id === id))
    // }
  }

  const deleteNote = (id) => {
    // setJotter({...jotter, notes: jotter.notes.filter(i => i._id !== id)})
  }

  // const addNewNote = (id) => {
  //
  // }

  return <Layout sidebar={<NotesSidebar/>}
                 page={<NotePage/>}
                 note={selectedNote}
                 jotter={jotter}
                 selectedNote={selectedNote}
                 deleteNote={deleteNote}
                 title={jotter ? jotter.title : '...'}/>


  // return (
  //   <div className="container">
  //     <Navbar navSidebar={navSidebar} title={jotter ? jotter.title : '...'}/>
  //
  //     <div className="container-fluid">
  //       <div className="row">
  //         <div className="d-none d-lg-block col-lg-4 col-xl-3 pt-2 pb-2">
  //           <NotesSidebar jotter={jotter} selectedNote={selectedNote} deleteNote={deleteNote}/>
  //         </div>
  //
  //         <div className="col-md-12 col-lg-8 col-xl-9 pt-2 pb-2">
  //           {selectedNote
  //             ? <NotePage note={selectedNote}/>
  //             : <h1 className="text-center mt-3">{t('SELECT_NOTE')}</h1>
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default NotesLayout

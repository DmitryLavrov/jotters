import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import JottersLayout from '../layouts/jottersLayout'
import NotesLayout from '../layouts/notesLayout'
import Error404 from '../components/common/error404'
import InfoLayout from '../layouts/infoLayout'
import PublicLayout from '../layouts/publicLayout'
import PublicNoteLayout from '../layouts/publicNoteLayout'

const Routing = () => {
  return (
    <Switch>
      <Route path="/404"><Error404/></Route>
      <Route path="/info" exact><InfoLayout/></Route>
      <Route path="/public/:noteId"><PublicNoteLayout/></Route>
      <Route path="/public"><PublicLayout/></Route>
      <Route path="/jotters/:jotterId/:noteId?"><NotesLayout/></Route>
      <Route path="/jotters" exact><JottersLayout/></Route>
      <Redirect from="/info" to="/info"/>
      <Redirect exact from="/" to="/info"/>
      <Redirect to="/404"/>
    </Switch>
  )
}

export default Routing

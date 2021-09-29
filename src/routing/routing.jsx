import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import JottersLayout from '../layouts/jottersLayout'
import NotesLayout from '../layouts/notesLayout'
import Error404 from '../components/common/error404'

const Routing = () => {
  return (
    <Switch>
      <Route path="/404"><Error404/></Route>
      <Route path="/jotters/:jotterId/:noteId?"><NotesLayout/></Route>
      <Route path="/jotters" exact><JottersLayout/></Route>
      <Redirect exact from="/" to="/jotters"/>
      <Redirect to="/404"/>
    </Switch>
  )
}

export default Routing

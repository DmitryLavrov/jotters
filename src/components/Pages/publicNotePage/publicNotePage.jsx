import React, {useEffect, useState} from 'react'
import ReactQuill from 'react-quill'
import {showToolbar} from '../../../utils/quill'
import Spinner from '../../common/spinner'

const PublicNotePage = ({note}) => {
  const [value, setValue] = useState()

  useEffect(() => {
    if (note) {
      setValue(note.content)
    }
  }, [note])

  const handleChange = (content, delta, source, editor) => {
    setValue(content)
  }

  if (!value) {
    return <Spinner/>
  }

  return (
    <>
      <ReactQuill modules={showToolbar} value={value} onChange={handleChange} theme="snow"/>
    </>
  )
}

export default PublicNotePage

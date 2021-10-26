import React, {useEffect, useState} from 'react'
import ReactQuill from 'react-quill'
import {showToolbar} from '../../../utils/quill'
import Spinner from '../../common/spinner'

const NotePage = ({note}) => {
  const [value, setValue] = useState()

  // useEffect(() => {
  //   document.querySelector('.ql-bold').setAttribute('title', 'Bold')
  // }, [])

  useEffect(() => {
    if (note) {
      setValue(note.content)
    }
  }, [note])

  const handleChange = (content, delta, source, editor) => {
    setValue(content)
  }

  if (!note) {
    return <Spinner/>
  }

  return (
    <>
      <ReactQuill modules={showToolbar} value={value} onChange={handleChange} theme="snow"/>
    </>
  )
}

export default NotePage

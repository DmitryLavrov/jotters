import React, {useEffect, useState} from 'react'
import ReactQuill from 'react-quill'

// const modules = {
//   toolbar: [
//     [{font: []}],
//     [{header: [1, 2, 3, 4, 5, 6, false]}],
//     ['bold', 'italic', 'underline', 'strike'],
//     [{align: []}],
//     [{color: []}, {background: []}],
//     [{script: 'sub'}, {script: 'super'}],
//     ['blockquote', 'code-block'],
//     [{list: 'ordered'}, {list: 'bullet'}],
//     [{indent: '-1'}, {indent: '+1'}],
//     ['link', 'image', 'video'],
//     ['clean']
//   ]
// }
const modules = {
  toolbar: [
    [{header: [1, 2, 3, 4, 5, 6, false]}],
    ['bold', 'italic', 'underline', 'strike'],
    [{align: []}],
    [{color: []}, {background: []}],
    [{script: 'sub'}, {script: 'super'}],
    ['blockquote', 'code-block'],
    [{list: 'ordered'}, {list: 'bullet'}]
  ]
}

const getTitleFromContent = (content) => {
  const arr = content.split(/\n/)
  while ((arr.length > 0) && (arr[0].trim() === '')) arr.shift()
  const title = (arr.length > 0) && (arr[0].trim())
  return title ? title : 'Noname note'
}

const NotePage = ({note}) => {
  const [value, setValue] = useState(note.content)

  // console.log(value)

  useEffect(() => {
    document.querySelector('.ql-bold').setAttribute('title', 'Bold')
  }, [])

  useEffect(() => {
    setValue(note.content)
  }, [note])

  const handleChange = (content, delta, source, editor) => {
    setValue(content)
  }

  return (
    <>
      <ReactQuill modules={modules} value={value} onChange={handleChange} theme="snow"/>
    </>
  )
}

export default NotePage

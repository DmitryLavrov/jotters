import React from 'react'
import ReactQuill from 'react-quill'
import {toolbarModules} from '../../../utils/quill'

const QuillCard = ({readOnly, value, onChange}) => {
  return (
    <div className={'quill-card' + (readOnly ? ' quill-card--read-only' : '')}>
      <ReactQuill modules={toolbarModules}
                  readOnly={readOnly}
                  className={readOnly ? 'hide-toolbar' : ''}
                  value={value}
                  onChange={onChange}
                  theme="snow"/>
    </div>
  )
}

export default QuillCard

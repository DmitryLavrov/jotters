import React from 'react'
import ReactQuill from 'react-quill'
import {showToolbar} from '../../../utils/quill'
import styles from './quill.module.css'

const QuillCard = ({readOnly, value, onChange}) => {
  return (
    <div className={styles.quillCard + ' shadow' + (readOnly ? ' py-2' : '')}>
      <ReactQuill modules={showToolbar}
                  readOnly={readOnly}
                  className={readOnly ? 'hide-toolbar' : ''}
                  value={value}
                  onChange={onChange}
                  theme="snow"/>
    </div>
  )
}

export default QuillCard

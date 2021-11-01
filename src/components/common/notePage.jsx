import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import API from '../../api'
import Spinner from './spinner'
import QuillCard from './quill/quillCard'

const NotePage = ({note, type, onUpdate}) => {
  const {t} = useTranslation()
  const [value, setValue] = useState()
  const [readOnly, setReadOnly] = useState(true)
  const [beforeEdit, setBeforeEdit] = useState()

  useEffect(() => {
    if (note) {
      setValue(note.content)
    }
  }, [note])

  const handleChange = (content) => {
    setValue(content)
  }

  const handleBtnEdit = () => {
    //todo : RESTRICT TO CHANGE LANGUAGE
    setBeforeEdit(value)
    setReadOnly(false)
  }

  const handleBtnSave = () => {
    // console.log(value)
    // console.log('plain text:', convertToPlain(value))
    if (type === 'INFO') {
      API.info.updateInfo(note.lng, value)
    } else if (type === 'PRIVATE' || type === 'PUBLIC') {
      API.notes.updateNote(note._id, value)
      onUpdate()
    }
    setReadOnly(true)
  }

  const handleBtnCancel = () => {
    setValue(beforeEdit)
    setReadOnly(true)
  }

  if (!value) {
    return <Spinner/>
  }

  return (
    <>
      <QuillCard readOnly={readOnly} value={value} onChange={handleChange}/>

      {/*{readOnly && <hr/>}*/}

      <div className="d-flex justify-content-end gap-3 my-3">
        {readOnly
          ? <>
            <button className="btn btn-outline-warning w-25 text-truncate"
                    onClick={handleBtnEdit}>{t('EDIT')}
            </button>
          </>
          : <>
            <button className="btn btn-outline-primary w-25 text-truncate"
                    onClick={handleBtnCancel}>{t('CANCEL')}
            </button>
            <button className="btn btn-outline-warning w-25 text-truncate"
                    onClick={handleBtnSave}>{t('SAVE')}
            </button>
          </>
        }
      </div>
    </>
  )
}

export default NotePage

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import API from '../../api'
import Spinner from './spinner'
import QuillCard from './quill/quillCard'
import infoService from '../../services/info.service'

const NotePage = ({note, type, onUpdate}) => {
  const {t} = useTranslation()
  const [value, setValue] = useState('')
  const [readOnly, setReadOnly] = useState(true)
  const [beforeEdit, setBeforeEdit] = useState({})

  useEffect(() => {
    if (note) {
      setValue(note.content)
    }
  }, [note])
  const handleChange = (content) => {
    setValue(content)
  }

  const handleBtnEdit = () => {
    setBeforeEdit({value, lng: note.lng})
    setReadOnly(false)
  }

  const handleBtnSave = async () => {
    if (type === 'INFO') {
      try {
        await infoService.update(beforeEdit.lng, value)
      } catch (err) {
        toast.error(err.message)
      }
    } else if (type === 'PRIVATE' || type === 'PUBLIC') {
      API.notes.updateNote(note._id, value)
      onUpdate && onUpdate()
    }
    setReadOnly(true)
  }

  const handleBtnCancel = () => {
    setValue(beforeEdit.value)
    setReadOnly(true)
  }

  if (value === undefined) {
    return <Spinner/>
  }

  return (
    <>
      <QuillCard readOnly={readOnly} value={value} onChange={handleChange}/>

      {(type === 'PRIVATE' || type === 'INFO') &&
      <div className="d-flex justify-content-end gap-3 my-3">
        {readOnly
          ? <button className="btn btn-outline-warning w-25 text-truncate"
                    onClick={handleBtnEdit}>{t('EDIT')}
          </button>
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
      }
    </>
  )
}

export default NotePage

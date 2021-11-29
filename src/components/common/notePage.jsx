import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import Spinner from './spinner'
import QuillCard from './quill/quillCard'
import infoService from '../../services/info.service'
import DropdownBtn from '../common/form/dropdownBtn'

const NotePage = ({note, type, onUpdate, paramsDropdownBtn}) => {
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
// =========================
// TODO
      try {
        await infoService.update(beforeEdit.lng, value)
      } catch (err) {
        toast.error(err.message)
      }
// =========================
    } else if (type === 'PRIVATE' || type === 'PUBLIC') {

      onUpdate && onUpdate(value)
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
    <div className="position-relative">
      {readOnly && type === 'PRIVATE' &&
      <DropdownBtn params={paramsDropdownBtn}/>
      }

      <QuillCard readOnly={readOnly} value={value} onChange={handleChange}/>
      {/*</div>*/}

      {(type === 'PRIVATE' || type === 'INFO') &&
      <div className="d-flex justify-content-end gap-3 my-3">
        {readOnly
          ? <>
            <button className="btn btn-outline-warning w-25 text-truncate"
                    onClick={handleBtnEdit}>
              {t('EDIT')}
            </button>
          </>

          : <>
            <button className="btn btn-outline-primary w-25 text-truncate"
                    onClick={handleBtnCancel}>
              {t('CANCEL')}
            </button>
            <button className="btn btn-outline-warning w-25 text-truncate"
                    onClick={handleBtnSave}>
              {t('SAVE')}
            </button>
          </>
        }
      </div>
      }
    </div>
  )
}

export default NotePage

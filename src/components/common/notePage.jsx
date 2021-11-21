import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import Spinner from './spinner'
import QuillCard from './quill/quillCard'
import infoService from '../../services/info.service'
import DropdownBtn from '../common/form/dropdownBtn'
import settings from '../../assets/images/settings.svg'

const NotePage = ({note, type, onUpdate, paramsBtnSettings}) => {
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
    <div>
      {/*<div className="position-relative">*/}

            {readOnly && type === 'PRIVATE' &&
              <DropdownBtn name={paramsBtnSettings.name}
                           image={paramsBtnSettings.image}
                           title={paramsBtnSettings.title}
                           items={paramsBtnSettings.items}/>
            }

        <QuillCard readOnly={readOnly} value={value} onChange={handleChange}/>
      {/*</div>*/}

      {(type === 'PRIVATE' || type === 'INFO') &&
      <div className="d-flex justify-content-end gap-3 my-3">
        {readOnly
          ? <>
            {/*// <span className="btn position-absolute top-0 end-0"*/}
            {/*//       onClick={() => onBtnSettings(note)}>*/}
            {/*//   <img src={settings} alt="Settings" height="18px"/>*/}
            {/*// </span>*/}
            {/*// <div className="position-absolute top-0 end-0">*/}

            {/*// </div>*/}

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

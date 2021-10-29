import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import QuillCard from '../../common/quill/quillCard'
import API from '../../../api'
import Spinner from '../../common/spinner'

const InfoPage = () => {
  const {t, i18n} = useTranslation()
  const [value, setValue] = useState()
  const [readOnly, setReadOnly] = useState(true)
  const [beforeEdit, setBeforeEdit] = useState({})
  const [lng, setLng] = useState()

  useEffect(() => {
    setLng(i18n.language)
  }, [i18n.language])

  useEffect(() => {
    if (readOnly) {
      setValue(null)
      API.info
         .getInfoByLng(i18next.language)
         .then(data => setValue(data.content))
    }
  }, [lng, readOnly])

  const handleChange = (content, delta, source, editor) => {
    setValue(content)
  }

  const handleBtnEdit = () => {
    setBeforeEdit({
      lng: i18next.language,
      content: value
    })
    setReadOnly(false)
  }

  const handleBtnSave = () => {
    // console.log(value)
    // console.log('plain text:', convertToPlain(value))
    API.info.updateInfo(beforeEdit.lng, value)
    setReadOnly(true)
  }

  const handleBtnCancel = () => {
    if (i18next.language === beforeEdit.lng) {
      setValue(beforeEdit.content)
    } else {
      API.info
         .getInfoByLng(i18next.language)
         .then(data => setValue(data.content))
    }
    setReadOnly(true)
  }

  if (!value) {
    return <Spinner/>
  }

  return (
    <>
      <QuillCard readOnly={readOnly} value={value} onChange={handleChange}/>

      {readOnly && <hr/>}

      <div className="d-flex justify-content-end gap-3 my-3">
        {readOnly
          ? <>
            <button className="btn btn-outline-warning"
                    onClick={handleBtnEdit}>{t('EDIT')}
            </button>
          </>
          : <>
            <button className="btn btn-outline-primary"
                    onClick={handleBtnCancel}>{t('CANCEL')}
            </button>
            <button className="btn btn-outline-warning"
                    onClick={handleBtnSave}>{t('SAVE')}
            </button>
          </>
        }
      </div>
    </>
  )
}

export default InfoPage

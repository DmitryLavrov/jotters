import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NoteSettings from '../components/forms/noteSettings'
import Confirmation from '../components/modal/confirmation'

const useNoteControlDropdown = (handleDeleteNote, handleUpdateNote, selectedNote) => {
  const {t} = useTranslation()
  const [isVisibleSettingsCard, setIsVisibleSettingsCard] = useState(false)
  const [isVisibleDeleteConfirm, setIsVisibleDeleteConfirm] = useState(false)

  const hideSettingsCard = () => {
    setIsVisibleSettingsCard(false)
  }

  const showSettingsCard = () => {
    setIsVisibleSettingsCard(true)
  }

  const hideDeleteConfirm = () => {
    setIsVisibleDeleteConfirm(false)
  }

  const handleDropdownBtn = (action) => {
    if (action === 'settings') {
      showSettingsCard()
    }
    if (action === 'delete') {
      setIsVisibleDeleteConfirm(true)
    }
  }

  const paramsDropdownBtn = {
    img: <span className="icon icon-arrow_drop_down_circle"/>,
    title: t('CONTROL'),
    onClick: handleDropdownBtn,
    items: [
      {
        action: 'settings',
        title: t('SETTINGS'),
        img: <span className="icon icon-settings"/>,
        disabled: false
      },
      {
        action: 'delete',
        title: t('DELETE_NOTE'),
        img: <span className="icon icon-delete"/>,
        disabled: false
      }
    ]
  }

  const renderControlDropdown = (
    <>
      {isVisibleSettingsCard &&
      <NoteSettings header={t('NOTE')}
                    settingsData={selectedNote}
                    onRemoveModal={hideSettingsCard}
                    onSubmit={handleUpdateNote}/>
      }

      {isVisibleDeleteConfirm &&
      <Confirmation header={t('DELETE')}
                    context={`${t('DELETE_NOTE')}`}
                    action={t('DELETE')}
                    onConfirm={() => handleDeleteNote(selectedNote)}
                    onCancel={() => setIsVisibleDeleteConfirm(false)}/>
      }
    </>
  )

  return {paramsDropdownBtn, hideDeleteConfirm, renderControlDropdown}

}

export default useNoteControlDropdown

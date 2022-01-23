import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import JotterSettings from '../components/forms/jotterSettings'
import Confirmation from '../components/modal/confirmation'

const initialSettingItems = {
  title: 'New Jotter',
  color: '#CCC'
}

const useJotterControlDropdown = (getJotter, handleUpdateJotter, handleDeleteJotter) => {
  const {t} = useTranslation()
  const [settingItems, setSettingItems] = useState()
  const [currentJotterId, setCurrentJotterId] = useState()
  const [isVisibleSettingsCard, setIsVisibleSettingsCard] = useState(false)
  const [isVisibleDeleteConfirm, setIsVisibleDeleteConfirm] = useState(false)

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
        title: t('DELETE_JOTTER'),
        img: <span className="icon icon-delete"/>,
        disabled: false
      }
    ]
  }

  const showSettingsCard = (settingItems) => {
    setSettingItems(settingItems ? settingItems : initialSettingItems)
    setIsVisibleSettingsCard(true)
  }

  const hideDeleteConfirm = () => {
    setIsVisibleDeleteConfirm(false)
  }

  const hideSettingsCard = () => {
    setIsVisibleSettingsCard(false)
  }

  function handleDropdownBtn(action, id) {
    if (action === 'settings') {
      showSettingsCard(getJotter(id))
    } else if (action === 'delete') {
      setCurrentJotterId(id)
      setIsVisibleDeleteConfirm(true)
    }
  }

  const renderControlDropdown = (<>
    {isVisibleSettingsCard &&
    <JotterSettings header={t('JOTTER')}
                    settingsData={settingItems}
                    onHideModal={hideSettingsCard}
                    onSubmit={handleUpdateJotter}/>
    }

    {isVisibleDeleteConfirm &&
    <Confirmation header={t('DELETE_JOTTER')}
                  context={`${getJotter(currentJotterId)?.title}`}
                  action={t('DELETE')}
                  onConfirm={() => handleDeleteJotter(currentJotterId)}
                  onCancel={() => setIsVisibleDeleteConfirm(false)}/>
    }
  </>)

  return {paramsDropdownBtn, showSettingsCard, hideDeleteConfirm, renderControlDropdown}
}

export default useJotterControlDropdown

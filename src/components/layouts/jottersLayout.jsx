import React, { useEffect, useState } from 'react'

import sortArrayBy from '../../utils/sortArrayBy'
import JottersSidebar from '../pages/jottersPage/jottersSidebar'
import JottersPage from '../pages/jottersPage/jottersPage'
import Layout from '../common/layout'
import { useTranslation } from 'react-i18next'
import JotterSettingsCard from '../pages/jottersPage/jotterSettingsCard'
import useJotters from '../../hooks/useJotters'
import Confirmation from '../common/modal/confirmation'

const initialSettingItems = {
  title: 'New Jotter',
  color: '#CCC'
}

const JottersLayout = () => {
  const {t} = useTranslation()
  const [jotters, setJotters] = useState()
  const [sort, setSort] = useState('byDate')
  const [filter, setFilter] = useState('all')
  const [SettingItems, setSettingItems] = useState()
  const [isVisibleSettingsCard, setIsVisibleSettingsCard] = useState(false)
  const [isVisibleDeleteConfirm, setIsVisibleDeleteConfirm] = useState(false)
  const [currentJotterId, setCurrentJotterId] = useState()
  const {fetchJotters, updateJotter, addNewJotter, deleteJotter, getJotter} = useJotters(jotters, setJotters)

  useEffect(() => {
    fetchJotters('619032cad8df581c4881d9a2').then(data => {
      setJotters(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setJotters(jotters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort])

  const handleSort = ({value}) => {
    setSort(value)
  }

  const handleFilter = ({value}) => {
    setFilter(value)
  }

  const showSettingsCard = () => {
    setIsVisibleSettingsCard(true)
  }

  const hideSettingsCard = () => {
    setIsVisibleSettingsCard(false)
  }

  const onAddNewJotter = () => {
    setSettingItems(initialSettingItems)
    showSettingsCard()
  }

  const handleDeleteJotter = async () => {
    if (currentJotterId) {
      await deleteJotter(currentJotterId)
    }
    setIsVisibleDeleteConfirm(false)
  }

  const handleUpdateJotter = async (jotter) => {
    if (jotter._id) {
      await updateJotter(jotter)
    } else {
      await addNewJotter(jotter, '619032cad8df581c4881d9a2')
    }
  }

  //========= DropdownBtn ============

  const handleDropdownBtn = (action, id) => {
    if (action === 'settings') {
      setSettingItems(getJotter(id))
      showSettingsCard()
    } else if (action === 'delete') {
      setCurrentJotterId(id)
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
        title: t('DELETE_JOTTER'),
        img: <span className="icon icon-delete"/>,
        disabled: false
      }
    ]
  }

  //===================================

  const filteredAndSortedJotters = () => {
    const sortedJotters = sortArrayBy(sort, jotters)
    if (sortedJotters && (filter === 'withPublicNotes')) {
      return sortedJotters.filter(j => j.hasPublicNote === true)
    }
    return sortedJotters
  }

  return (
    <>
      <Layout title={jotters ? t('PRIVATE_JOTTERS') : '...'}>
        <JottersSidebar sort={sort}
                        filter={filter}
                        onSort={handleSort}
                        onFilter={handleFilter}
                        onAddNewJotter={onAddNewJotter}/>
        <JottersPage jotters={filteredAndSortedJotters()}
                     paramsDropdownBtn={paramsDropdownBtn}/>
      </Layout>

      {isVisibleSettingsCard &&
      <JotterSettingsCard header={t('JOTTER')}
                          settingsData={SettingItems}
                          onHideModal={hideSettingsCard}
                          onSubmit={handleUpdateJotter}/>
      }

      {isVisibleDeleteConfirm &&
      <Confirmation header={t('DELETE')}
                    context={`${t('DELETE_JOTTER')}`}
                    action={t('DELETE')}
                    onConfirm={handleDeleteJotter}
                    onCancel={() => setIsVisibleDeleteConfirm(false)}/>
      }

    </>
  )
}

export default JottersLayout

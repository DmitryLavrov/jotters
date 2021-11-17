import React, { useEffect, useState } from 'react'

import sortArrayBy from '../utils/sortArrayBy'
import JottersSidebar from '../components/Pages/jottersPage/jottersSidebar'
import JottersPage from '../components/Pages/jottersPage/jottersPage'
import Layout from '../components/common/layout'
import { useTranslation } from 'react-i18next'
import JotterCardSettings from '../components/Pages/jottersPage/jotterCardSettings'
import useJotters from '../hooks/useJotters'

const initialSettings = {
  title: 'New Jotter',
  color: '#CCC'
}

const JottersLayout = () => {
  const {t} = useTranslation()
  const [jotters, setJotters] = useState()
  const [sort, setSort] = useState('byDate')
  const [filter, setFilter] = useState('all')
  const [isVisibleSettings, setIsVisibleSettings] = useState(false)
  const [settings, setSettings] = useState()
  const {fetchJotters, updateJotter, addNewJotter, getJotter} = useJotters(jotters, setJotters)

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

  const handleSort = (event) => {
    setSort(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const showSettings = () => {
    setIsVisibleSettings(true)
  }

  const hideSettings = () => {
    setIsVisibleSettings(false)
  }

  const onAddNewJotter = () => {
    setSettings(initialSettings)
    showSettings()
  }

  const onUpdateJotter = async (id) => {
    setSettings(getJotter(id))
    showSettings()
  }

  const handleUpdateSettings = async (jotter) => {
    if (jotter._id) {
      await updateJotter(jotter)
    } else {
      await addNewJotter(jotter, '619032cad8df581c4881d9a2')
    }
  }

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
                     onUpdateJotter={onUpdateJotter}/>
      </Layout>

      {isVisibleSettings &&
      <JotterCardSettings header={t('JOTTER')}
                          settingsData={settings}
                          onHideModal={hideSettings}
                          onSubmit={handleUpdateSettings}/>
      }
    </>
  )
}

export default JottersLayout

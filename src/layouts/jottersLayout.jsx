import React, { useEffect, useState } from 'react'

// import API from '../api'
import sortArrayBy from '../utils/sortArrayBy'
import JottersSidebar from '../components/Pages/jottersPage/jottersSidebar'
import JottersPage from '../components/Pages/jottersPage/jottersPage'
import Layout from '../components/common/layout'
import { useTranslation } from 'react-i18next'
import JotterCardSettings from '../components/Pages/jottersPage/jotterCardSettings'
import jotterService from '../services/jotter.service'
import { toast } from 'react-toastify'

const initialSettings = {
  title: 'New Jotter',
  color: '#CCC'
}

const JottersLayout = () => {
  const {t} = useTranslation()
  const [jotters, setJotters] = useState()
  const [sort, setSort] = useState('byDate')
  const [filter, setFilter] = useState('all')
  const [isVisibleSettingsModal, setIsVisibleSettingsModal] = useState(false)
  const [settingsData, setSettingsData] = useState()

  let filteredJotters

  useEffect(() => {
    fetchJotters('619032cad8df581c4881d9a2')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchJotters = async (userId) => {
    try {
      const jotters = await jotterService.fetch(userId)
      setJotters(sortArrayBy(sort, jotters.data))
    } catch (err) {
      toast(err.message)
    }
  }

  useEffect(() => {
    setJotters(sortArrayBy(sort, jotters))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort])

  const handleSort = (event) => {
    setSort(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const showSettings = () => {
    setIsVisibleSettingsModal(true)
  }

  const hideSettings = () => {
    setIsVisibleSettingsModal(false)
  }

  const addNewJotter = () => {
    setSettingsData(initialSettings)
    showSettings()
  }

  const updateJotter = async (id) => {
    setSettingsData()
    showSettings()
    try {
      const {data} = await jotterService.get(id)
      setSettingsData({
        _id: id,
        title: data.title,
        color: data.color
      })
    } catch (err) {
      toast(err.message)
    }
  }

  const handleUpdateSettings = async (data) => {
    if (data._id) {
      try {
        const jotter = await jotterService.update(data._id, {...data, updatedAt: Date.now()})
        const newJotters = jotters.filter(j => j._id !== data._id)
        newJotters.push(jotter.data)
        setJotters(sortArrayBy(sort, newJotters))
      } catch
        (err) {
        toast(err.message)
      }
    } else { // New jotter
      try {
        const jotter = await jotterService.add({...data, userId: '619032cad8df581c4881d9a2'})
        const newJotters = [...jotters, jotter.data]
        setJotters(sortArrayBy(sort, newJotters))
      } catch
        (err) {
        toast(err.message)
      }
    }
  }

  if (jotters) {
    if (filter === 'all') {
      filteredJotters = jotters
    } else if (filter === 'withPublicNotes') {
      filteredJotters = jotters.filter(j => j.hasPublicNote === true)
    }
  }

  return (
    <>
      <Layout title={jotters ? t('PRIVATE_JOTTERS') : '...'}>
        <JottersSidebar sort={sort}
                        filter={filter}
                        onSort={handleSort}
                        onFilter={handleFilter}
                        addNewJotter={addNewJotter}/>
        <JottersPage jotters={filteredJotters}
                     onUpdateJotter={updateJotter}/>
      </Layout>

      {isVisibleSettingsModal &&
      <JotterCardSettings header={t('JOTTER')}
                          settingsData={settingsData}
                          onHideModal={hideSettings}
                          onSubmit={handleUpdateSettings}/>
      }
    </>
  )
}

export default JottersLayout

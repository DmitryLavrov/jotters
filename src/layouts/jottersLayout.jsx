import React, { useEffect, useState } from 'react'

import API from '../api'
import sortArrayBy from '../utils/sortArrayBy'
import JottersSidebar from '../components/Pages/jottersPage/jottersSidebar'
import JottersPage from '../components/Pages/jottersPage/jottersPage'
import Layout from '../components/common/layout'
import { useTranslation } from 'react-i18next'

const JottersLayout = () => {
  const {t} = useTranslation()
  const [jotters, setJotters] = useState()
  const [sort, setSort] = useState('byDate')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    API.jotters.fetchAllByUserId('u01').then(data => {
      setJotters(sortArrayBy(sort, data))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setJotters(sortArrayBy(sort, jotters))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort])

  useEffect(() => {
    setJotters()
    if (filter === 'all') {
      API.jotters.fetchAllByUserId('u01').then(data => {
        setJotters(sortArrayBy(sort, data))
      })
    } else if (filter === 'withPublicNotes') {
      API.jotters.fetchPublicByUserId('u01').then(data => {
        setJotters(sortArrayBy(sort, data))
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  const handleSort = (event) => {
    setSort(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const addNewJotter = () => {
    API.jotters.addNewJotter('u01').then((data) => setJotters(data))
  }

   const updateJotter = (id, data) => {
     setJotters()
    API.jotters.updateJotter(id, 'u01', data).then((data) => setJotters(data))
  }

  return (
    <Layout title={jotters ? t('PRIVATE_JOTTERS') : '...'}>
      <JottersSidebar sort={sort}
                      filter={filter}
                      onSort={handleSort}
                      onFilter={handleFilter}
                      addNewJotter={addNewJotter}/>
      <JottersPage jotters={jotters}
                   onUpdateJotter={updateJotter}/>
    </Layout>
  )
}

export default JottersLayout

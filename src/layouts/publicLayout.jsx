import React, { useEffect, useState } from 'react'
import API from '../api'
import { useTranslation } from 'react-i18next'
import PublicSidebar from '../components/Pages/publicPage/publicSidebar'
import PublicPage from '../components/Pages/publicPage/publicPage'
import Layout from '../components/common/layout'

const initialFilter = {
  search: ''
}

const PublicLayout = () => {
  const {t} = useTranslation()
  const [notes, setNotes] = useState()
  const [filter, setFilter] = useState(initialFilter)
  const [sort, setSort] = useState('byDate')

  useEffect(() => {
    API.notes.fetchAllPublic().then((data) => {
      setNotes(sortBy(sort, data))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setNotes(sortBy(sort, notes))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort])

  const handleFilter = (localFilter) => {
    setFilter(prev => {
      return {
        ...prev,
        ...localFilter
      }
    })
  }

  const sortBy = (sort, notes) => {
    if (!notes) return

    const copyNotes = [...notes]

    if (sort === 'byDate') {
      return copyNotes.sort((a, b) => (b.updateDate - a.updateDate))
    }

    if (sort === 'byName') {
      return copyNotes.sort((a, b) => ((a.title > b.title) ? 1 : -1))
    }
  }

  const handleSort = (newSort) => {
    setSort(newSort)
  }

  const filterNotes = () => {
    let filtered = notes
    if (filter.search) {
      filtered = notes.filter(note => note.summary.toLowerCase().includes(filter.search.toLowerCase()))
    }
    return filtered
  }

  const filteredNotes = filterNotes()

  return <Layout sidebar={<PublicSidebar/>}
                 page={<PublicPage/>}
                 notes={filteredNotes}
                 filter={filter}
                 onChangeFilter={handleFilter}
                 sort={sort}
                 onChangeSort={handleSort}
                 title={notes ? t('PUBLIC_NOTES') : '...'}/>
}

export default PublicLayout

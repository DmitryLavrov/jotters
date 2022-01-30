import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PublicNotesSidebar from '../pages/sidebar/publicNotesSidebar'
import PublicNotesPage from '../pages/main/publicNotes/publicNotesPage'
import Layout from './common/layout'
import sortArrayBy from '../../utils/sortArrayBy'
import selectUsersFromNotes from '../../utils/selectUsersFromNotes'
import useNotes from '../../hooks/useNotes'

const PublicNotesLayout = () => {
  const {t} = useTranslation()
  const [notes, setNotes] = useState([])
  const [users, setUsers] = useState()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('byDate')
  const {fetchPublicNotes} = useNotes()

  useEffect(() => {
    fetchPublicNotes().then(data => {
      setNotes(sortArrayBy(sort, data))
      const users = selectUsersFromNotes(data)
      setUsers(users)
    })
  }, [])

  useEffect(() => {
    setNotes(sortArrayBy(sort, notes))
  }, [sort])

  const handleSearch = (value) => {
    setSearch(value)
  }

  const handleSort = ({value}) => {
    setSort(value)
  }

  const handleSelect = (localUsers) => {
    setUsers(localUsers)
  }

  const filterNotes = () => {
    let filtered = notes

    if (notes && search) {
      filtered = filtered.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
    }

    if (notes && users) {
      const selectedUserList = users.filter(user => user.selected === true).map(user => user._id)
      filtered = filtered.filter(note => selectedUserList.includes(note.userId))
    }

    return filtered
  }

  const filteredNotes = filterNotes()

  return (
    <Layout title={notes ? t('PUBLIC_NOTES') : '...'}>
      <PublicNotesSidebar search={search}
                          sort={sort}
                          users={users}
                          onSearch={handleSearch}
                          onSort={handleSort}
                          onSelect={handleSelect}/>
      <PublicNotesPage notes={filteredNotes}/>
    </Layout>
  )
}

export default PublicNotesLayout

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sidebar from '../../common/modal/sidebar'
import useDebounceState from '../../../hooks/useDebounce'
import Radio from '../../common/form/radio'
import Checkbox from '../../common/form/checkbox'

const DELIMITER = String.fromCodePoint(9733)

const PublicNotesSidebar = ({search, sort, users, onSearch, onSort, onSelect, ...rest}) => {
  const {t} = useTranslation()
  const [localSearch, setLocalSearch] = useState(search)
  const [localUsers, setLocalUsers] = useState(users)
  const [debounce, setDebounce] = useDebounceState(DELIMITER, 500)
// =========================
  console.log('debounce:', debounce)
// =========================
  useEffect(() => {
    onSearch(localSearch)
    onSelect(localUsers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce])

  useEffect(() => {
    setLocalUsers(users)
  }, [users])

  const handleSearch = (event) => {
    setLocalSearch(event.target.value)

    const saveSelect = debounce.slice(debounce.indexOf(DELIMITER))
    setDebounce(event.target.value + saveSelect)
  }

  const handleSelect = ({name, value}) => {
    setLocalUsers(prev => {
      const newUsers = prev.map(i => i._id === name ? {...i, selected: value} : i)

      const saveSearch = debounce.slice(0, debounce.indexOf(DELIMITER) + 1)
      setDebounce(saveSearch + newUsers.reduce((acc, i) => (i.selected ? (acc + i._id) : (acc + '')), ''))

      return newUsers
    })
  }

  return (
    <Sidebar {...rest}>

      <input name="search"
             value={localSearch}
             onChange={handleSearch}
             type="text"
             className="search-input"
             placeholder={t('SEARCH_PLACEHOLDER')}/>

      <Radio name="sort"
             label={t('SORT')}
             onChange={onSort}
             radioButtons={[
               {label: t('BY_DATE'), checked: sort === 'byDate', value: 'byDate'},
               {label: t('BY_NAME'), checked: sort === 'byName', value: 'byName'}
             ]}/>

      <Checkbox name="checkbox"
                label={t('FILTER')}
                onChange={handleSelect}
                checkboxItems={localUsers}
      />

    </Sidebar>
  )
}

export default PublicNotesSidebar

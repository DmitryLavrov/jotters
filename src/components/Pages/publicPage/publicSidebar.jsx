import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sidebar from '../../common/modal/sidebar'
import useDebounceState from '../../../hooks/useDebounce'

const PublicSidebar = ({search, sort, users, onSearch, onSort, onSelect, ...rest}) => {
  const {t} = useTranslation()
  const [localSearch, setLocalSearch] = useState(search)
  const [localUsers, setLocalUsers] = useState(users)
  const [debounce, setDebounce] = useDebounceState({search, users}, 500)

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
    setDebounce(prev => {
      return {
        ...prev,
        search: event.target.value
      }
    })
  }

  const handleSelect = (event) => {
    setLocalUsers(prev => {
      const newUsers = prev.map(i => i._id === event.target.name
        ? {...i, selected: event.target.checked} : i)

      setDebounce(prev => {
        return {
          ...prev,
          users: newUsers
        }
      })

      return newUsers
    })
  }

  return (
    <Sidebar {...rest}>
      <h4 className="mt-3">
        {t('SEARCH')}
      </h4>

      <input name="search"
             value={localSearch}
             onChange={handleSearch}
             type="text" className="form-control" placeholder={t('SEARCH_PLACEHOLDER')}/>

      <h4 className="mt-3">
        {t('SORT')}
      </h4>

      <div className="form-check">
        <input name="sort"
               value="byDate"
               checked={sort === 'byDate'}
               onChange={onSort}
               type="radio" className="form-check-input" id="RadioSort1"/>
        <label className="form-check-label" htmlFor="RadioSort1">
          {t('BY_DATE')}
        </label>
      </div>
      <div className="form-check">
        <input name="sort"
               value="byName"
               checked={sort === 'byName'}
               onChange={onSort}
               type="radio" className="form-check-input" id="RadioSort2"/>
        <label className="form-check-label" htmlFor="RadioSort2">
          {t('BY_NAME')}
        </label>
      </div>

      <h4 className="mt-3">
        {t('FILTER')}
      </h4>

      {localUsers &&
      localUsers.map(user => (
        <div className="form-check" key={user._id}>
          <input className="form-check-input"
                 onChange={handleSelect}
                 name={user._id}
                 type="checkbox"
                 value=""
                 id={user._id}
                 checked={user.selected}/>
          <label className="form-check-label" htmlFor={user._id}>
            {user.name}
          </label>
        </div>
      ))
      }

    </Sidebar>
  )
}

export default PublicSidebar

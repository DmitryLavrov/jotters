import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sidebar from '../../common/modal/sidebar'
import useDebounceState from '../../../hooks/useDebounce'

const PublicSidebar = ({filter, onChangeFilter, sort, onChangeSort, ...rest}) => {
  const {t} = useTranslation()
  const [localFilter, setLocalFilter] = useState(filter)
  const [debounce, setDebounce] = useDebounceState(filter.search, 1000)

  useEffect(() => {
    onChangeFilter(localFilter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce])

  const handleChangeFilter = (event) => {
    setLocalFilter(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
    setDebounce(event.target.value)
  }

  const handleChangeSort = (event) => {
    onChangeSort(event.target.value)
  }

  return (
    <Sidebar {...rest}>
      <h4 className="mt-3">
        {t('SEARCH')}
      </h4>

      <input name="search"
             value={localFilter.value}
             onChange={handleChangeFilter}
             type="text" className="form-control" placeholder={t('SEARCH_PLACEHOLDER')}/>

      <h4 className="mt-3">
        {t('SORT')}
      </h4>

      <div className="form-check">
        <input name="sort"
               value='byDate'
               checked={sort === 'byDate'}
               onChange={handleChangeSort}
               type="radio" className="form-check-input" id="RadioSort1"/>
        <label className="form-check-label" htmlFor="RadioSort1">
          {t('BY_DATE')}
        </label>
      </div>
      <div className="form-check">
        <input name="sort"
               value='byName'
               checked={sort === 'byName'}
               onChange={handleChangeSort}
               type="radio" className="form-check-input" id="RadioSort2"/>
        <label className="form-check-label" htmlFor="RadioSort2">
          {t('BY_NAME')}
        </label>
      </div>

      <h4 className="mt-3">
        {t('FILTER')}
      </h4>

      {/*<div className="form-check">*/}
      {/*  <input className="form-check-input" type="checkbox" value="" id="Check1" checked/>*/}
      {/*  <label className="form-check-label" htmlFor="Check1">*/}
      {/*    Первый*/}
      {/*  </label>*/}
      {/*</div>*/}
      {/*<div className="form-check">*/}
      {/*  <input className="form-check-input" type="checkbox" value="" id="Check2" checked/>*/}
      {/*  <label className="form-check-label" htmlFor="Check2">*/}
      {/*    Второй*/}
      {/*  </label>*/}
      {/*</div>*/}
    </Sidebar>
  )
}

export default PublicSidebar

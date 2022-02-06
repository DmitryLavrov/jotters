import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import sortArrayBy from '../../utils/sortArrayBy'
import JottersSidebar from '../pages/sidebar/jottersSidebar'
import Jotters from '../pages/main/jotters/jotters'
import Layout from './common/layout'
import useJotterControlDropdown from '../../hooks/useJotterControlDropdown'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import {
  addNewJotter, deleteJotter, getJottersList, getJottersLoadingStatus, loadJotters, updateJotter
} from '../../store/jottersSlice'
import Spinner from '../common/spinner'

const JottersLayout = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const jotters = useSelector(getJottersList())
  const jottersIsLoading = useSelector(getJottersLoadingStatus())
  const [sort, setSort] = useState('byDate')
  const [filter, setFilter] = useState('all')
  const {currentUser} = useAuth()

  const {
    paramsDropdownBtn, showSettingsCard, hideDeleteConfirm, renderControlDropdown
  } = useJotterControlDropdown(handleUpdateJotter, handleDeleteJotter)

  useEffect(() => {
    dispatch((loadJotters()))
  }, [])

  const handleSort = ({value}) => {
    setSort(value)
  }

  const handleFilter = ({value}) => {
    setFilter(value)
  }

  const onAddNewJotter = () => {
    showSettingsCard()
  }

  function handleDeleteJotter(id) {
    dispatch(deleteJotter(id))
    hideDeleteConfirm()
  }

  function handleUpdateJotter(jotter) {
    if (jotter._id) {
      dispatch(updateJotter(jotter))
    } else {
      dispatch(addNewJotter(jotter, currentUser._id))
    }
  }

  const filteredAndSortedJotters = () => {
    const sortedJotters = sortArrayBy(sort, jotters)
    if (sortedJotters && (filter === 'withPublicNotes')) {
      return sortedJotters.filter(j => j.hasPublicNote === true)
    }
    return sortedJotters
  }

  return (<>
    <Layout title={jotters ? t('PRIVATE_JOTTERS') : '...'}>
      <JottersSidebar sort={sort}
                      filter={filter}
                      onSort={handleSort}
                      onFilter={handleFilter}
                      onAddNewJotter={onAddNewJotter}/>

      {jottersIsLoading
        ? <Spinner/>

        : <Jotters jotters={filteredAndSortedJotters()}
                   paramsDropdownBtn={paramsDropdownBtn}
                   onAddNewJotter={onAddNewJotter}/>
      }

    </Layout>

    {renderControlDropdown}
  </>)
}

export default JottersLayout

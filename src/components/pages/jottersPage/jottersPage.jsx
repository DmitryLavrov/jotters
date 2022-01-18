import React from 'react'
import JotterCard from './jotterCard'
import Spinner from '../../common/spinner'

const JottersPage = ({jotters, paramsDropdownBtn}) => {
  return (
    <>
      {jotters
        ? jotters.map(jotter => <JotterCard key={jotter._id}
                                            jotter={jotter}
                                            paramsDropdownBtn={paramsDropdownBtn}/>)
        : <Spinner/>
      }
    </>
  )
}

export default JottersPage

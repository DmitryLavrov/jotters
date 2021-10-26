import React from 'react'
import JotterCard from './jotterCard'
import Spinner from '../../common/spinner'

const JottersPage = ({jotters, deleteJotter}) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-2">

      {jotters
        ? jotters.map(jotter => <JotterCard key={jotter._id} jotter={jotter} deleteJotter={deleteJotter}/>)
        : <Spinner/>
      }

    </div>
  )
}

export default JottersPage

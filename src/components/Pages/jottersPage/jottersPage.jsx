import React from 'react'
import JotterCard from './jotterCard'
import Spinner from '../../common/spinner'

const JottersPage = ({jotters, onUpdateJotter}) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-2 align-items-center">

      {jotters
        ? jotters.map(jotter => <JotterCard key={jotter._id}
                                            jotter={jotter}
                                            onUpdateJotter={onUpdateJotter}/>)
        : <Spinner/>
      }

    </div>
  )
}

export default JottersPage

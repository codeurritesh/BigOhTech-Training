import React, { useCallback, useMemo, useState } from 'react'
import FilterContainer from './Section/FilterContainer'
import ImageContainer from './Section/ImageContainer'
import Pagination from './Section/Pagination'
import { apiType } from '../datatypes/api-type'

type Props = {
  data: apiType
}

const Section = (props: Props) => {
  // console.log(props)

  const [state, setState] = useState([])
  const [state1, setState1] = useState([])


  const isFlag = useMemo(() => { // Caching
    return state.length > 0
  }, [state])

  const flag = useCallback(() => {
    return state.length > 0
  }, [state])


  return (
    <div>
      {flag() ? 'Yes' : 'No'}
      <FilterContainer />
      <ImageContainer data={props.data} />
      <Pagination />
    </div>
  )
}



export default Section
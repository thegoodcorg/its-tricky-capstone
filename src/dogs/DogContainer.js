import { React, useEffect } from 'react'
import { DogForm } from './DogForm'
import { Dogs } from './Dogs'
import { useState } from 'react'

export const DogContainer = () => {

    const [dogList, setDogList] = useState([])
    const [renderState, setRenderState] = useState([])
  
  return (<>
    <Dogs dogList={dogList} setDogList={setDogList} render={renderState}/>
    <DogForm setter={setRenderState}/>
  </>
  )
}

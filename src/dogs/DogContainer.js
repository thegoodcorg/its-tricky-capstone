import { React, useEffect } from 'react'
import { DogForm } from './DogForm'
import { Dogs } from './Dogs'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom'

export const DogContainer = () => {

    const [dogList, setDogList] = useState([])
    const [renderState, setRenderState] = useState([])
    const [breeds, setBreeds] = useState([])
    const [trickList, updateTrickList] = useState([])

    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const fetchDogs = () => {fetch(`http://localhost:8088/dogs?ownerId=${trickyUserObject.id}`)
    .then(res => res.json())
    .then(data => setDogList([...data]))}

    const fetchDogBreeds = () => {
      fetch(`https://api.thedogapi.com/v1/breeds`, {
          method: 'GET',
          headers: {'X-Api-Key' : 'live_iZGeSbiRdAvRGo45Wc4864LL5EDo1ffUAFkx3iwuNrnbPSqnyxHLCJGXSYKO1jNi'}
      }).then(res =>res.json())
      .then(data =>setBreeds(data))
  }

    useEffect(() => {
        fetch(`http://localhost:8088/tricklist?_expand=trick`)
        .then(res => res.json())
        .then(data => updateTrickList(data))
    }, [])
    
    useEffect(() => {
        fetchDogs()}, []
    )

    useEffect(() => {
      fetchDogBreeds()
    },[])
    
 
  
 return (<>
    <Dogs breeds={breeds} trickList={trickList} dogList={dogList} setDogList={setDogList} render={renderState}/>
    <Link to="/dogs/addNew"><Button>Add a new dog</Button></Link>
  </>
  )
}

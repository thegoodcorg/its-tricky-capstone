import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

export const DogDetails = () => {

  const [knownTricks, setKnownTricks] = useState([])
  const [unknownTricks, setUnknownTricks] = useState([])
  const [dog, setDog] = useState([])
  const [breeds, setBreeds] = useState([])
  const { dogId } = useParams()

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds`, {
      method: 'GET',
      headers: { 'X-Api-Key': 'live_iZGeSbiRdAvRGo45Wc4864LL5EDo1ffUAFkx3iwuNrnbPSqnyxHLCJGXSYKO1jNi' }
    }).then(res => res.json())
      .then(breeds => setBreeds(breeds))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8088/dogs?id=${dogId}`)
      .then(res => res.json())
      .then(data => setDog(data[0]))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8088/tricklist?dogId=${dogId}&_expand=trick`)
      .then(res => res.json())
      .then(res => {
        setKnownTricks(res.filter((trick) => trick.known),
          setUnknownTricks(res.filter((trick) => !trick.known)))
      })
  }, [])



  const currentBreed = breeds.find(breed => breed.id == dog.breedId)


  return (<>
    <Image src={currentBreed?.image?.url} size="medium" />
    <p>Breed group: {currentBreed?.breed_group}</p>
    <section>
      <div>
      <h2>What I know</h2>
        {knownTricks.map(singleTrick =>
          <p key={singleTrick.id}>{singleTrick.trick.name}</p>)}
      </div>
      <div>
        <h2>What I'm learning</h2>
        {unknownTricks.map(singleTrick =>
          <p key={singleTrick.id}>{singleTrick.trick.name}</p>)}
      </div>
    </section>
  </>)
}

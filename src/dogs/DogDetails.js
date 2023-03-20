import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Image, Segment } from 'semantic-ui-react'
import { Card, Grid, Divider, Icon } from 'semantic-ui-react'
import "./dogDetails.css"

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



  const currentBreed = breeds.find(breed => breed.id === dog.breedId)


  return (
    <Card key={dog.id}>
      <Link to={`/dogs/${dog.id}`} className="dogCard" key={dog.id}>
        <Image className="dog_image" src={currentBreed?.image?.url} wrapped ui={false} />
      </Link>
      <Card.Content>
        <Card.Header>{dog.name}</Card.Header>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <u>Known</u>
              {knownTricks.map(singleTrick =>
              
                <Link to={`/tricks/${singleTrick.trickId}`} key={singleTrick.id}><p>  <Icon key={singleTrick.id} name='check circle' color="green"/>{singleTrick.trick.name}</p></Link>)}
            </Grid.Column>
            <Grid.Column>
              <u>Learning</u>
              {unknownTricks.map(singleTrick =>
                <Link to={`/tricks/${singleTrick.trickId}`} key={singleTrick.id}>
                  <p> <Icon name='checkmark' color="yellow"/>
                  {singleTrick.trick.name}</p></Link>)}
            </Grid.Column>
          </Grid>

          <Divider vertical></Divider>
        </Segment>
        <Card.Description>
          {dog.breed?.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <span className='age'>{currentBreed?.name} - {dog.age}{dog?.age > 1 ? " years old" : " year old"}</span>
        </a>
      </Card.Content>
    </Card>
  )
}
import React, { useEffect, useState } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom'

export const RelatedDogs = () => {

    const [relatedDogs, setRelatedDogs] = useState([])
    const [breeds, setBreeds] = useState([])

    const trick = useParams()
   
    const getRelatedDogs = () => {
        fetch(`http://localhost:8088/tricklist?trickId=${trick.trickId}&known=true&_expand=dog`)
            .then(res => res.json())
            .then(data => setRelatedDogs(data))
    }

    const fetchDogBreeds = () => {
        fetch(`https://api.thedogapi.com/v1/breeds`, {
            method: 'GET',
            headers: { 'X-Api-Key': 'live_iZGeSbiRdAvRGo45Wc4864LL5EDo1ffUAFkx3iwuNrnbPSqnyxHLCJGXSYKO1jNi' }
        }).then(res => res.json())
            .then(data => setBreeds(data))
    }

    const currentDogBreed = (dog) => {
        const currentBreed = breeds.find(breed => breed.id == dog.breedId)
        return currentBreed
    }

    useEffect(() => {
        fetchDogBreeds()
    }, [])

    useEffect(() => {
        getRelatedDogs()
    }, [])

    return (<div key={relatedDogs}>
        <p>good bois who know this trick</p>
        <Card.Group>
            {relatedDogs.map((singleDog) => {
                let breed = currentDogBreed(singleDog.dog)
                return <Card key={singleDog.dog.id}>
                    <Link to={`/dogs/${singleDog.dog.id}`} className="dogCard">
                        <Image className="dog_image" src={breed?.image?.url} wrapped ui={false} />
                    </Link>
                    <Card.Content>
                        <Card.Header>
                            {singleDog.dog.name}
                        </Card.Header>
                    </Card.Content>

                </Card>
            })}
        </Card.Group>
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import "./dogs.css"
import { Card, Icon, Image, Container } from 'semantic-ui-react'
import { DogInfoCard } from '../functions/DogInfoCard'

export const Dogs = ({ trickList, breeds, dogList }) => {
    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const currentDogBreed = (dog) => {
        const currentBreed = breeds.find(breed => breed.id == dog.breedId)
        return currentBreed
    }

    const tricksKnown = (dog) => trickList.map((singleTrick) => {
        if (singleTrick.dogId == dog.id && singleTrick.known == true) {
            return <>
                <Icon key={singleTrick.id} name='checkmark' />
                {singleTrick.trick.name} </>
        }
    }
    )


    return (

        <Container style={{ marginTop: "35px" }}>
            <div>
                <Card.Group itemsPerRow={3} stackable>
                    {dogList.map(dog => <DogInfoCard dog={dog} tricks={tricksKnown(dog)} breed={currentDogBreed(dog)} />)}
                </Card.Group>
            </div>
        </Container>)
}

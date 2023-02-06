import React from 'react'
import "./dogs.css"
import { Card, Icon, Container } from 'semantic-ui-react'
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
            return <p key={singleTrick.id}>
                <Icon key={singleTrick.id} name='check circle' color="green"/>
                {singleTrick.trick.name} </p>
        }
    }
    )
    const tricksLearning = (dog) => trickList.map((singleTrick) => { 
        if (singleTrick.dogId == dog.id && singleTrick.known == false) {
            return <p key={singleTrick.id}>
                <Icon name='checkmark' color="yellow"/>
                {singleTrick.trick.name} </p>
        }
    }
    )


    return (

        <Container style={{ marginTop: "35px" }}>
            <div>
                <Card.Group itemsPerRow={3} stackable>
                    {dogList.map(dog => <DogInfoCard
                     key={dog.id}
                     dog={dog} 
                     tricksKnown={tricksKnown(dog)} 
                     tricksLearning={tricksLearning(dog)}
                     breed={currentDogBreed(dog)} />)}
                </Card.Group>
            </div>
        </Container>)
}

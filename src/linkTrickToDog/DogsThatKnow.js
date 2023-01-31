import React, { useEffect, useState } from 'react'


export const DogsThatKnow = ({ passedTrick }) => {

    const [dogsKnowingTrick, updateDogsKnowingTrick] = useState()
    const [dogs, updateDogs] = useState({})

    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)


    useEffect(() => {
        fetch(`http://localhost:8088/dogs?ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then((data) => updateDogs(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/tricklist?trickId=${passedTrick.id}&_expand=trick&_expand=dog`)
            .then(res => res.json())
            .then(data => updateDogsKnowingTrick(data))

    }, [])

    return dogsKnowingTrick?.map(singlePair => {
        if (singlePair.dog.ownerId == trickyUserObject.id)
            return (<p>{singlePair.dog.name} knows this trick!</p>)
    })






}
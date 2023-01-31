import React, { useEffect, useState } from 'react'
import { DogForm } from './DogForm'
import "./dogs.css"

export const Dogs = ({ dogList, setDogList, render }) => {
    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const [trickList, updateTrickList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/tricklist?_expand=trick`)
            .then(res => res.json())
            .then(data => updateTrickList(data))
    }, [])

    useEffect(() => {

        fetch(`http://localhost:8088/dogs?_expand=breed&ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then(data => setDogList(data))

    }, [render]

    )
    return (<>
        <article className='dogs'>
            {dogList.map(
                (dog) => {
                    return <article className='dog_card'>
                        <section className='dog_title' key={dog.id}>
                            {dog.name}
                        </section>
                        <section className='dog_details'>
                            <ul>
                                <li>{dog.age} years old</li>
                                <li>{dog.breed.name}</li>
                            </ul>
                        </section>
                        <section className='known_tricks'>
                            {trickList.map((singleTrick) => {
                                if (singleTrick.dogId == dog.id && singleTrick.known == true) {
                                    return <>{singleTrick.trick.name} ✓</>
                                }
                            })}
                        </section>
                    </article>
                }
            )}
        </article>
    </>
    )

}

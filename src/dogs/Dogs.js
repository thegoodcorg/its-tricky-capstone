import React, { useEffect, useState } from 'react'
import { DogForm } from './DogForm'

export const Dogs = ({dogList, setDogList, render}) => {
    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)



    useEffect(() => {

        fetch('http://localhost:8088/dogs')
            .then(res => res.json())
            .then(data => setDogList(data))

        }, [render]
        
        )
        return (<>
            <article>
            {dogList.map(
                (dog) => {
                if (dog.ownerId === trickyUserObject.id) {
                    return  <section className='dog_card' key={dog.id}>
                    {dog.name} 
                    </section>
                    
            }
        })}
        </article>
        </>
    )
        
}

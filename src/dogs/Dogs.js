import React, { useEffect, useState } from 'react'

export const Dogs = () => {
    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const [dogList, setDogList] = useState([])

    useEffect(() => {

        fetch('http://localhost:8088/dogs')
            .then(res => res.json())
            .then(data => setDogList(data))
    }, []

    )
    return (
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
    )
}

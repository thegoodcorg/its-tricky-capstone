import React, { useEffect, useState } from 'react'

export const LinkTrickToDog = ({ passedTrick }) => {
    const [dogs, updateDogs] = useState([])
    const [dogsKnowingTrick, updateDogsKnowingTrick] = useState()

    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const fetchTricks = () => {
        fetch(`http://localhost:8088/tricklist?trickId=${passedTrick.id}&ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then(data => updateDogsKnowingTrick([...data]))
    }

    const handleKnownTrick = (clicked) => {
        const objToApi = {
            dogId: clicked.id,
            trickId: passedTrick.id,
            known: true
        }

        fetch("http://localhost:8088/tricklist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToApi)
        }
        )
            .then(res => res.json())
            .then(fetchTricks())
    }


    useEffect(() => {
        fetch(`http://localhost:8088/dogs?ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then((data) => updateDogs(data))
    }, [])

    useEffect(() => {
        fetchTricks()
    }, [])


    return <div>
        {dogs.map((dog) => {
            // dogsKnowingTrick.map((singleTrick) => {
                let test = dogsKnowingTrick.find((dogTrickList) => { return dogTrickList.dogId == dog.id})
            if (!test) {
                return <div key={dog.id}>
                    <button
                        className="know_trick"
                        key={dog.id}
                        onClick={() => { handleKnownTrick(dog) }
                        }>{dog.name} knows this!
                    </button>
                    <button className="learn_trick">teach {dog.name} this trick</button>
                </div>

            } if(test) {
                return <div>
                     {dog.name} knows this trick!
                </div>
            }
              
            })}
    </div>
}

// if(dogsKnowingTrick.filter(filteredDog => dog.id == filteredDog.id).length == 1) {
//     return `${dog.name} knows this!`
//  }
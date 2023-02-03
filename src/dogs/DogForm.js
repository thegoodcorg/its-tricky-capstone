import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const DogForm = ({ dogs, fetchDogs }) => {
const [breeds, setBreeds] = useState()

    const fetchDogBreeds = () => {
        fetch(`https://api.thedogapi.com/v1/breeds`, {
            method: 'GET',
            headers: {'X-Api-Key' : 'live_iZGeSbiRdAvRGo45Wc4864LL5EDo1ffUAFkx3iwuNrnbPSqnyxHLCJGXSYKO1jNi'}
        }).then(res =>res.json())
        .then(data =>setBreeds(data))
    }

    const navigate = useNavigate()
    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const [newDog, setNewDog] = useState({
        name: "",
        age: null,
        breedId: null
    })

    useEffect(() => {
        fetchDogBreeds()
    },[])

    useEffect(() => {
        console.log('resetting state')
        setNewDog({
            name: "",
            age: null,
            breedId: null
        })

    }, [dogs])

    const saveButtonHandler = (e) => {

        const dogPostObject = {
            name: newDog.name,
            age: parseInt(newDog.age),
            breedId: parseInt(newDog.breedId),
            ownerId: trickyUserObject.id
        }
        fetch("http://localhost:8088/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dogPostObject)
        }
        )
            .then(res => res.json())
            .then(navigate("/dogs"))

    }

    return (<>
        <h1>Add a new dog here.</h1>
        Name <input type="field" placeholder="Jimmothy"
            onChange={(e) => {
                const copy = { ...newDog }
                copy.name = e.target.value
                setNewDog(copy)
            }}></input><br />
        Age <input type="number" placeholder='1, 2, etc'
            onChange={(e) => {
                const copy = { ...newDog }
                copy.age = e.target.value
                setNewDog(copy)
            }}
        ></input><br />
        breed <select
            onChange={(e) => {
                const copy = { ...newDog }
                copy.breedId = e.target.value
                setNewDog(copy)
            }}><option >Please select a breed</option>
            {breeds?.map((breed) => {
                return <option value={breed.id} key={breed.id}>{breed.name}</option>
            })}
        </select>
        <button className="save_dog"
            onClick={(e) => saveButtonHandler(e)}>Save</button>
    </>
    )
}

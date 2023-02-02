import { React, useEffect, useState } from 'react'

export const DogForm = ({ breeds, fetchBreeds }) => {


    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const [newDog, setNewDog] = useState({
        name: "",
        age: null,
        breedId: null
    })


    const saveButtonHandler = () => {

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
            .then((data) => fetchBreeds)

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
            }}><option value="null">Please select a breed</option>
            {breeds?.map((breed) => {
                return <option value={breed.id}>{breed.name}</option>
            })}
        </select>
        <button className="save_dog"
            onClick={() => saveButtonHandler()}>Save</button>
    </>
    )
}

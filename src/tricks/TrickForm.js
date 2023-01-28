import React, { useState } from 'react'
import { Difficulty } from './Difficulty'
import { StepsForm } from './StepsForm'
import "./trickform.css"

export const TrickForm = () => {
    const [newTrick, updateNewTrick] = useState({ name: "", ownerId: "", description: "", difficulty: 1 })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const localTrickyUser = localStorage.getItem("tricky_user")
        const trickyUserObject = JSON.parse(localTrickyUser)

        // TODO: Create the object to be saved to the API
        const ticketToSend = {
            ownerId: trickyUserObject.id,
            description: newTrick,
            difficulty: 1
        }

        // TODO: Perform the fetch() to POST the object to the API
        fetch("http://localhost:8088/tricks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketToSend)
        }
        )
            .then(res => res.json)
            .then(() => {

            }
            )
    }

    return (
        <div className="trickform"><h1>Document the next best dog trick!</h1>
            Name: <input className='input-name'
                type="field"
                placeholder="What is your trick called?"
                onChange={(e) => {
                    const copy = { ...newTrick }
                    copy.name = e.target.value
                    updateNewTrick(copy)
                }
                }></input>
            <br /><br />
            Description: <input className='input-description'
                type="field"
                placeholder="Give a short description of the desired effect"
                onChange={(e) => {
                    const copy = { ...newTrick }
                    copy.description = e.target.value
                    updateNewTrick(copy)
                }
                }></input>
            <br /><br />
            Steps:
            <StepsForm />
            <br /><br />
            <Difficulty />
            <button
                className='save_button'
                onClick={() => {

                }}>Save Trick</button>
        </div>

    )
}

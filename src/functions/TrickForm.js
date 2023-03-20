import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import "./TrickForm.css"
import { Difficulty } from "../tricks/Difficulty"
import { StepsForm } from '../tricks/StepsForm'

export const TrickForm = ({update}) => {

    const [newTrick, updateNewTrick] = useState({ name: "", ownerId: "", description: "", difficulty: 1 })
    const [formArr, setForm] = useState([{ details: "" }])
    const [rating, setRating] = useState(1)


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const localTrickyUser = localStorage.getItem("tricky_user")
        const trickyUserObject = JSON.parse(localTrickyUser)

        const ticketToSend = {
            ownerId: trickyUserObject.id,
            name: newTrick.name,
            description: newTrick.description,
            difficulty: parseInt(rating)
        }
        fetch("http://localhost:8088/tricks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketToSend)
        }
        )
            .then(res => res.json())
            .then((response) => {
                formArr.map((step, stepCount) => {
                    const trickResponseObj = {
                        trickId: response.id,
                        details: step.details,
                        order: stepCount + 1
                    }

                    fetch("http://localhost:8088/steps", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(trickResponseObj)
                    }
                    )
                        .then(res => res.json())
                        .then(stepCount++)
                       
                }
                )
            }
            ) .then(updateNewTrick({ name: "", ownerId: "", description: "", difficulty: 1 }), setRating(1), setForm([{ details: "" }]), update())
    }
    
    return (<div className='trickForm'>
        <Form>
            <Form.Group className="trickInputs" widths='equal'>
                <Form.Input 
                fluid label='Trick name' 
                value={newTrick?.name}
                placeholder='First name' onChange={(e) => {
                    const copy = { ...newTrick }
                    copy.name = e.target.value
                    updateNewTrick(copy)
                }} />
                <Form.TextArea
                label='Description' 
                value={newTrick?.description}
                placeholder='Description' onChange={(e) => {
                    const copy = { ...newTrick }
                    copy.description = e.target.value
                    updateNewTrick(copy)
                }
                } />
            </Form.Group>
            <Form.Group inline>
                <StepsForm formArr={formArr} setter={setForm} />
            </Form.Group>
            <Difficulty rating={rating} setter={setRating} />
            <Form.Button className='submitButton' onClick={(e) => {
                handleSaveButtonClick(e)
            }}>Submit</Form.Button>
        </Form>
    </div>
    )
}



{/* <div className="trickform"><h1>Document the next best dog trick!</h1>
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
Description: <br/><textarea rows="5" cols="30" className='input-description'
    type="field"
    placeholder="Give a short description of the desired effect"
    onChange={(e) => {
        const copy = { ...newTrick }
        copy.description = e.target.value
        updateNewTrick(copy)
    }
    }></textarea>
<br /><br />
Steps:
<StepsForm formArr={formArr} setter={setForm} />
<br /><br />
<Difficulty rating={rating} setter={setRating} />
<button
    className='save_button'
    onClick={(e) => {
        handleSaveButtonClick(e)
    }}>Save Trick</button>
</div>
 */}

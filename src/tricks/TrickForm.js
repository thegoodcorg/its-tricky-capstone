// import React, { useState } from 'react'
// import { Difficulty } from './Difficulty'
// import { StepsForm } from './StepsForm'
// import "./trickform.css"

// export const TrickForm = ({ update }) => {
//     const [newTrick, updateNewTrick] = useState({ name: "", ownerId: "", description: "", difficulty: 1 })
//     const [formArr, setForm] = useState([{ details: "" }])
//     const [rating, setRating] = useState(1)


//     const handleSaveButtonClick = (event) => {
//         event.preventDefault()

//         const localTrickyUser = localStorage.getItem("tricky_user")
//         const trickyUserObject = JSON.parse(localTrickyUser)

//         const ticketToSend = {
//             ownerId: trickyUserObject.id,
//             name: newTrick.name,
//             description: newTrick.description,
//             difficulty: parseInt(rating)
//         }
//         fetch("http://localhost:8088/tricks", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(ticketToSend)
//         }
//         )
//             .then(res => res.json())
//             .then((response) => {
//                 let stepCount = 1
//                 formArr.map((step, stepCount) => {
//                     const trickResponseObj = {
//                         trickId: response.id,
//                         details: step.details,
//                         order: stepCount + 1
//                     }

//                     fetch("http://localhost:8088/steps", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                         body: JSON.stringify(trickResponseObj)
//                     }
//                     )
//                         .then(res => res.json())
//                         .then(stepCount++)
//                         .then(update())
//                 })

//             }
//             )
//     }

//     return (
//         <div className="trickform"><h1>Document the next best dog trick!</h1>
//             Name: <input className='input-name'
//                 type="field"
//                 placeholder="What is your trick called?"
//                 onChange={(e) => {
//                     const copy = { ...newTrick }
//                     copy.name = e.target.value
//                     updateNewTrick(copy)
//                 }
//                 }></input>
//             <br /><br />
//             Description: <br/><textarea rows="5" cols="30" className='input-description'
//                 type="field"
//                 placeholder="Give a short description of the desired effect"
//                 onChange={(e) => {
//                     const copy = { ...newTrick }
//                     copy.description = e.target.value
//                     updateNewTrick(copy)
//                 }
//                 }></textarea>
//             <br /><br />
//             Steps:
//             <StepsForm formArr={formArr} setter={setForm} />
//             <br /><br />
//             <Difficulty rating={rating} setter={setRating} />
//             <button
//                 className='save_button'
//                 onClick={(e) => {
//                     handleSaveButtonClick(e)
//                 }}>Save Trick</button>
//         </div>

//     )
// }

import React from 'react'
import "./steps.css"
import { Form } from 'semantic-ui-react'


export const StepsForm = ({ formArr, setter }) => {

    const handleChange = (e, index) => {
        const { details, value } = e.target
        const copy = [...formArr]
        copy[index].details = value
        setter(copy)
    }

    return (<div className="trickSteps">
        {
            formArr.map((form, index) => {
                return <div
                    className="steps"
                    key={index}
                    id={`form-${index}`}>
                    <u>Step {index + 1}</u>
                    <Form.TextArea
                        onChange={(e) => { handleChange(e, index) }
                        } />
                </div>
            })
        }<br />
        <button onClick={() => {
            setter([...formArr, { details: "" }])
        }}>New Line</button>

    </div>
    )
}

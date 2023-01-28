import React, { useState } from 'react'


export const StepsForm = () => {

    const [formArr, setForm] = useState([{ details: "" }])

    const handleChange = (e, index) => {
        const {details, value} = e.target
        const copy = [...formArr]
        copy[index].details = value
        setForm(copy)
    }

    return (<>
        {
            formArr.map((form, index) => {
                return <input
                    key={index}
                    id={`form-${index}`}
                    placeholder={`Step ${index + 1}`}
                    type="field"
                    onChange={ (e) => {handleChange(e, index)}
                    } />

            })
        }<br/>
        <button onClick={() => {
            setForm([...formArr, { details: "" }])
        }}>New Line</button>

    </>
    )
}

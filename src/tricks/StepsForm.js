import React from 'react'


export const StepsForm = ({formArr, setter}) => {

    const handleChange = (e, index) => {
        const {details, value} = e.target
        const copy = [...formArr]
        copy[index].details = value
        setter(copy)
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
            setter([...formArr, { details: "" }])
        }}>New Line</button>

    </>
    )
}

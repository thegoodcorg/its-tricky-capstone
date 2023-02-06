import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'
import "./TrickForm.css"
import { Difficulty } from "../tricks/Difficulty"
import { StepsForm } from '../tricks/StepsForm'

export const TrickForm = () => {

    const [formArr, setForm] = useState([{ details: "" }])



  return (
    <Form className='trickForm'>
        <Form.Group className="trickInputs" widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.TextArea label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Group inline>
        <StepsForm formArr={formArr} setter={setForm} />
        </Form.Group>
        <Difficulty />
        <Form.Button>Submit</Form.Button>
      </Form>
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

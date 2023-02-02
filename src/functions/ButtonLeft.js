import React from "react"
import { Button } from "semantic-ui-react"

export const ButtonLeft = ({dogs, dogsKnowingTrick, handleKnownTrick}) => {

    return dogs?.map((dog) => {
      let returnedDogItem = dogsKnowingTrick?.find((dogTrickList) => { return dogTrickList.dogId == dog.id })
      if (!returnedDogItem) {
        return <div key={dog.id}>
            <Button basic attached="left" color='blue' primary className='Know_trick'
            onClick={() => { handleKnownTrick(dog) }
              }>{dog.name} knows this!
            </Button>
            </div>}})
      }
  
  
    
import React from "react"
import { Button } from "semantic-ui-react"

export const ButtonRight = ({ dogs, dogsKnowingTrick, handleTrickToLearn }) => {
    return dogs?.map((dog) => {
        let returnedDogItem = dogsKnowingTrick?.find((dogTrickList) => { return dogTrickList.dogId == dog.id })
        if (!returnedDogItem) {
          return <div key={dog.id}>
            <Button secondary attached="right" className="learn_trick"
            onClick={() => { handleTrickToLearn(dog) }}>teach {dog.name} this trick</Button>
          </div>
  
        } if (returnedDogItem) {
          return <div key={dog.id}>
            <Button disabled={true}>{dog.name} knows this trick!</Button>
          </div>
        }
  
      })
}

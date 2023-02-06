import React from "react"

export const ButtonLeft = ({dogs, dogsKnowingTrick, handleKnownTrick}) => {

    return dogs?.map((dog) => {
      let returnedDogItem = dogsKnowingTrick?.find((dogTrickList) => { return dogTrickList.dogId == dog.id })
      if (!returnedDogItem) {
        return <div key={dog.id}>
            <button  className='Know_trick'
            onClick={() => { handleKnownTrick(dog) }
              }>{dog.name} knows this!
            </button>
            </div>}})
      }
  
  
    
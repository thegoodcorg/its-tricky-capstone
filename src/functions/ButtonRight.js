import React from "react"

export const ButtonRight = ({ dogs, dogsKnowingTrick, handleTrickToLearn }) => {
  return dogs?.map((dog) => {
    let returnedDogItem = dogsKnowingTrick?.find((dogTrickList) => { return dogTrickList.dogId == dog.id })
    if (!returnedDogItem) {
      return <div key={dog.id} className="learnTricks">
        <button className="learn_trick"
          onClick={() => { handleTrickToLearn(dog) }}>teach {dog.name} this trick</button>
      </div>

    }
  }
  )
}

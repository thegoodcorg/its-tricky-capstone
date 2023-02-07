import React, { useEffect, useState } from 'react'
import './tricks.css'
import { TrickDisplayCard } from '../functions/TrickDisplayCards'
import { Card, Sidebar } from 'semantic-ui-react'
import { TricksSidebar } from '../functions/TricksSidebar'

export const Tricks = () => {
  const [trickList, setTricks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8088/tricks')
      .then(res => res.json())
      .then((data) => setTricks(data))
  },
    []
  )


  return (<>
    <Card.Group className="trickContainer">
      {trickList.map((singleTrick) => {
        return <TrickDisplayCard key={singleTrick.id} passedTrick={singleTrick} />
      })}
    </Card.Group>
  </>)
}

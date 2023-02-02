import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReadDifficulty } from './ReadDifficulty'
import { LinkTrickToDog } from '../linkTrickToDog/LinkTrickToDog'
import './tricks.css'
import { TrickDisplayCard } from '../functions/TrickDisplayCards'
import { Card } from 'semantic-ui-react'


export const Tricks = () => {
  const [trickList, setTricks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8088/tricks')
      .then(res => res.json())
      .then((data) => setTricks(data))
  },
    []
  )


 return ( <Card.Group className="trickContainer">
  {trickList.map((singleTrick) => {
  return TrickDisplayCard(singleTrick)
  })}
 </Card.Group>
 )
}

// return (
//   <section
//     className={`tricks`}
//     key={singleTrick.id}>
//     <div className="trick_title"><Link to={`/tricks/${singleTrick.id}`}>
//       {singleTrick.name}
//     </Link></div>
//     <p className="trick_description">
//     {singleTrick.description}
//     </p>
//     <br/>
//     <ReadDifficulty difficulty={singleTrick.difficulty} />
//     <LinkTrickToDog passedTrick={singleTrick}/>
//   </section>
// )
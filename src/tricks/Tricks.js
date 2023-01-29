import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Tricks = () => {
  const [trickList, setTricks] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8088/tricks')
      .then(res => res.json())
      .then((data) => setTricks(data))
  },
    []
  )


  return (
    trickList.map((singleTrick) => {
      return (
        <section
          className={`trick-${singleTrick.id}`}
          key={singleTrick.id}>
          <Link to={`/tricks/${singleTrick.id}`}>
            {singleTrick.name}
          </Link><br/>
          Description: {singleTrick.description}
          <br/>
          Difficulty: {singleTrick.difficulty}/5
        </section>
      )
    }

    )
  )
}


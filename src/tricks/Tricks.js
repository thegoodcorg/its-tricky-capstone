import React, { useEffect, useState } from 'react'
import './tricks.css'
import { TrickDisplayCard } from '../functions/TrickDisplayCards'
import { Card, Sidebar } from 'semantic-ui-react'
import { TricksSidebar } from '../functions/TricksSidebar'

export const Tricks = () => {
  const [trickList, setTricks] = useState([])
  const [searchText, updateSearchText] = useState("")


  let filteredTricks =  trickList.filter(singleTrick => {
    if (searchText === "") {
      return trickList;
    } else if (singleTrick.name.toLowerCase().includes(searchText.toLowerCase())) {
      return singleTrick;
    }
  });

  useEffect(() => {
    fetch('http://localhost:8088/tricks')
      .then(res => res.json())
      .then((data) => setTricks(data))
  },
    []
  )


  return (<>
    <input
      className='searchBar'
      type="field"
      placeholder='Looking for something?'
      onChange={(e) => {
        let copy = { ...searchText }
        copy = e.target.value
        updateSearchText(copy)
      }} />
    <Card.Group className="trickContainer">
      {filteredTricks.map((singleTrick) => {
        return <TrickDisplayCard key={singleTrick.id} passedTrick={singleTrick} />
      })}
    </Card.Group>
  </>)
}

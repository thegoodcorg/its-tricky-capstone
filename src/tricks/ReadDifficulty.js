import React, { useState } from 'react'
import { BiBone } from 'react-icons/bi'

export const ReadDifficulty = ({difficulty}) => {
  
    const [hover, setHover] = useState('1')

    return (
        <div>
        <p className='difficultyRating'>Difficulty: {difficulty}/5</p>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return <label key={i}>
                    <BiBone className="star" 
                    size={50} 
                    color={difficulty >= ratingValue ? "#ffc107" : "#e4e5e9"}
                    />
                </label>
            })}
        </div>
    )
}
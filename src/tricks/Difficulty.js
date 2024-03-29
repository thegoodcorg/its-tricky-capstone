import React, { useState } from 'react'
import { BiBone } from 'react-icons/bi'

export const Difficulty = ({rating, setter}) => {
  
    const [hover, setHover] = useState('1')

    return (
        <div className='difficulty'>
        <p>Difficulty: {rating}/5</p>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return <label key={i}>
                    <input
                        onClick={() => setter(ratingValue)}
                        value={ratingValue}
                        type="radio"
                        name="rating" />
                    <BiBone className="star" 
                    size={50} 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => {setHover(ratingValue)}}
                    onMouseLeave={() => {setHover(null)}}
                    />
                </label>
            })}
        </div>
    )
}

import React, { useEffect, useState } from 'react'

export const UserCreatedTricks = ( { trickList, update } ) => {    
    
    const deleteListing = (id) => {
        fetch(`http://localhost:8088/tricks/${id}`, {
            method: "DELETE"
        }).then(update())
    }

   return trickList.map(singleTrick => {
        return <div><h1>
            {singleTrick.name}
        </h1>
        <article>
            {singleTrick.description}
        </article>
        <button onClick={() => {
            deleteListing(singleTrick.id)
        }}>Delete</button></div>
    })
}

import React, { useEffect, useState } from 'react'
import { TrickForm } from '../functions/TrickForm'
import { UserCreatedTricks } from './UserCreatedTricks'

export const MyTricks = () => {

    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const [userTricks, updateUserTricks] = useState([])

    const fetchUserTricks = () => {
        fetch(`http://localhost:8088/tricks?ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then(data => {
                if (data.length < 1) {
                    let emptyArr = []
                    updateUserTricks(emptyArr)
                }
                else (
                    updateUserTricks([...data])
                )
            })
    }

    useEffect(() => {
        fetchUserTricks()
    }, [])

    return (<>
        <TrickForm update={fetchUserTricks} />
        <UserCreatedTricks trickList={userTricks} update={fetchUserTricks} />
    </>
    )
}

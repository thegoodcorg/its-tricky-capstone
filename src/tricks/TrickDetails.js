import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ButtonLeft } from '../functions/ButtonLeft'
import { TrickDetailsCard } from '../functions/TrickDetailsCard'
import './trickDetails.css'
export const TrickDetails = ({ singleTrick }) => {



    const [dogs, updateDogs] = useState([])
    const [dogsKnowingTrick, updateDogsKnowingTrick] = useState()

    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)
    const { trickId } = useParams()
    const [trick, setTrick] = useState({})
    const [steps, setSteps] = useState([])


    useEffect(() => {
        fetch(
            `http://localhost:8088/steps?trickId=${trickId}`
        )
            .then((res) => res.json())
            .then((steps) => {
                setSteps(steps)
            })
    }, [])

    useEffect(() => {
        fetch(
            `http://localhost:8088/tricks/${trickId}`
        )
            .then((res) => res.json())
            .then((trickData) => {
                setTrick(trickData)
            })
    }, [])


    useEffect(() => {
        fetch(`http://localhost:8088/dogs?ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then((data) => updateDogs(data))
    }, [])

    useEffect(() => {
        fetchTricks()
    }, [])


    const sortedSteps = steps.sort((a, b) => {
        return a.order - b.order
    })

    const fetchTricks = () => {
        fetch(`http://localhost:8088/tricklist?trickId=${trickId}&ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then(data => updateDogsKnowingTrick([...data]))
    }

    const handleKnownTrick = (clicked) => {
        const objToApi = {
            dogId: clicked.id,
            trickId: parseInt(trickId),
            known: true
        }

        fetch("http://localhost:8088/tricklist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToApi)
        }
        )
            .then(res => res.json())
            .then(fetchTricks())
    }

    const handleTrickToLearn = (clicked) => {
        const objToApi = {
            dogId: clicked.id,
            trickId: parseInt(trickId),
            known: false
        }

        fetch("http://localhost:8088/tricklist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToApi)
        }
        )
            .then(res => res.json())
            .then(fetchTricks())
    }



    return (<>
        <TrickDetailsCard dogs={dogs} steps={sortedSteps} trick={trick} dogsKnowingTrick={dogsKnowingTrick} handleKnownTrick={handleKnownTrick} />
    </>)
}




// const [trick, setTrick] = useState({})
// const [steps, setSteps] = useState([])
// const[dogs, setDogs] =useState([])

// const { trickId } = useParams()

// useEffect(() => {
//     fetch(
//         `http://localhost:8088/steps?trickId=${trickId}`
//     )
//         .then((res) => res.json())
//         .then((steps) => {
//             setSteps(steps)
//         })
// }, [])

// useEffect(() => {
//     fetch(
//         `http://localhost:8088/tricks/${trickId}`
//     )
//         .then((res) => res.json())
//         .then((trickData) => {
//             setTrick(trickData)
//         })
// }, [])


// const sortedSteps = steps.sort((a, b) => {
//     return a.order - b.order
// })
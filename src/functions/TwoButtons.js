import React, { useState, useEffect } from 'react'
import { Button, Segment } from 'semantic-ui-react'
import { ButtonLeft } from './ButtonLeft'
import { ButtonRight } from './ButtonRight'
import { Grid, Divider } from 'semantic-ui-react'
import "./twoButtons.css"

export const TwoButtons = ({ steps, passedTrick }) => {

    const [dogs, updateDogs] = useState([])
    const [dogsKnowingTrick, updateDogsKnowingTrick] = useState()

    const localTrickyUser = localStorage.getItem("tricky_user")
    const trickyUserObject = JSON.parse(localTrickyUser)

    const fetchTricks = () => {
        fetch(`http://localhost:8088/tricklist?trickId=${passedTrick}&ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then(data => updateDogsKnowingTrick([...data]))
    }

    const handleKnownTrick = (clicked) => {
        const objToApi = {
            dogId: clicked.id,
            trickId: parseInt(passedTrick.id),
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
            trickId: parseInt(passedTrick.id),
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


    useEffect(() => {
        fetch(`http://localhost:8088/dogs?ownerId=${trickyUserObject.id}`)
            .then(res => res.json())
            .then((data) => updateDogs(data))
    }, [])

    useEffect(() => {
        fetchTricks()
    }, [])


    return <Segment>
        <Grid columns={2} relaxed='very'>
            <Grid.Column>
                <ButtonLeft
                    dogs={dogs}
                    dogsKnowingTrick={dogsKnowingTrick}
                    handleKnownTrick={handleKnownTrick} />
            </Grid.Column>
            <Grid.Column className='column-2'>
                <ButtonRight dogs={dogs}
                    dogsKnowingTrick={dogsKnowingTrick}
                    handleTrickToLearn={handleTrickToLearn} />
            </Grid.Column>
        </Grid>
        <Divider vertical><div className='knows'>Knows</div><div className='learning'>Learning</div></Divider>
    </Segment>

}



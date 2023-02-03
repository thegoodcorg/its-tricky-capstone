import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import { ReadDifficulty } from '../tricks/ReadDifficulty'
import "./TrickDisplayCard.css"
import { TwoButtons } from './TwoButtons'

export const TrickDisplayCard = ({ passedTrick }) => {
    return <Link to={`/tricks/${passedTrick.id}`} className="trickCard" key={passedTrick.id}><Card>
        <Card.Content>
            <Card.Header>{passedTrick.name}</Card.Header>
            <Card.Description className='trick_content'>
                {passedTrick.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <ReadDifficulty difficulty={passedTrick.difficulty} />
        </Card.Content>
    </Card>
    </Link>
}


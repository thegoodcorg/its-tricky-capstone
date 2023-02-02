import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import { ReadDifficulty } from '../tricks/ReadDifficulty'
import "./TrickDisplayCard.css"

export const TrickDisplayCard = (singleTrick) => {
   return <Link to={`/tricks/${singleTrick.id}`} className="trickCard" key={singleTrick.id}><Card>
        <Card.Content>
        <Card.Header>{singleTrick.name}</Card.Header>
            <Card.Meta></Card.Meta>
            <Card.Description>
                {singleTrick.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <ReadDifficulty difficulty={singleTrick.difficulty}/>
        </Card.Content>
    </Card>
    </Link>
}


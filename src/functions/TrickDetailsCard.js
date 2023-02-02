import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import './TrickDetailsCard.css'

export const TrickDetailsCard = ({ steps }) => (

  steps.map((trickStep) => {
    return <Card>
    <Card.Content>
      <Card.Header>Step #{trickStep.order}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event className='step-container'>
          <Feed.Label content={trickStep.order}>
            <Feed.Content>
              <Feed.Extra className='step-details'>
                {trickStep.details}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Label>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>    
  })

  

)


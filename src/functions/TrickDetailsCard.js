import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import './TrickDetailsCard.css'
import { ButtonLeft } from './ButtonLeft'
import { ButtonRight } from './ButtonRight'

export const TrickDetailsCard = ({ dogs, dogsKnowingTrick, handleKnownTrick, steps }) => (<>

  <ButtonLeft dogs={dogs} dogsKnowingTrick={dogsKnowingTrick} handleKnownTrick={handleKnownTrick} />
  {steps?.map((trickStep) => {
    return <Card>
      <Card.Content>
        <Card.Header>Step #{trickStep.order}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed.Event className='step-container'>
          <Feed.Label content={trickStep.order}>
            <Feed.Content>
              <Feed.Extra className='step-details'>
                {trickStep.details}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Label>
        </Feed.Event>
      </Card.Content>
    </Card>
  })
  }
  <ButtonRight dogs={dogs} dogsKnowingTrick={dogsKnowingTrick} handleKnownTrick={handleKnownTrick}/>
</>

)


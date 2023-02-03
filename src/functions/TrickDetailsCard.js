import React from 'react'
import { Card, Feed} from 'semantic-ui-react'
import './TrickDetailsCard.css'
import { ButtonLeft } from './ButtonLeft'
import { ButtonRight } from './ButtonRight'

export const TrickDetailsCard = ({ dogs,
 trick,
 dogsKnowingTrick, 
 handleTrickToLearn, 
 handleKnownTrick, 
 steps }) => (<>

<ButtonLeft dogs={dogs}
dogsKnowingTrick={dogsKnowingTrick}
handleKnownTrick={handleKnownTrick} />
<Card>
    <Card.Content header={trick.name} />
    <Card.Content>
    <ol>
      {
        steps.map(singleStep => {
          return <li key={singleStep.id}>
            {singleStep.details}
          </li>
        })
      }
    </ol>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
  <ButtonRight dogs={dogs}
dogsKnowingTrick={dogsKnowingTrick}
handleTrickToLearn={handleTrickToLearn} />
</>

)
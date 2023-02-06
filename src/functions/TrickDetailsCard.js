import React from 'react'
import { Card } from 'semantic-ui-react'
import { RelatedDogs } from '../tricks/RelatedDogs'
import './TrickDetailsCard.css'
import { TwoButtons } from './TwoButtons'

export const TrickDetailsCard = ({ trick, steps }) => (
  <>
    <Card className="trickStepsCard">
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
        <TwoButtons passedTrick={trick} />
      </Card.Content>
    </Card>
    <RelatedDogs trick={trick} />

  </>

)
import React from 'react'
import { Button } from 'semantic-ui-react'

export const TwoButtons = ({dog}) => (
  <div>
    <Button primary>{dog.name} knows this trick!</Button>
    <Button secondary>Teach {dog.name} this trick!</Button>
  </div>
)

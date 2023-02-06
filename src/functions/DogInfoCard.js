import { Segment, Divider, Grid, Card, Image} from 'semantic-ui-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './dogInfoCard.css'

export const DogInfoCard = ({ dog, tricksKnown, tricksLearning, breed }) => (

    <Card key={dog.id}>
    <Link to={`/dogs/${dog.id}`} className="dogCard" key={dog.id}>
        <Image className="dog_image" src={breed?.image?.url} wrapped ui={false} />
        </Link>
        <Card.Content>
            <Card.Header>{dog.name}</Card.Header>
            <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      <u>Known</u>
      {tricksKnown}
      </Grid.Column>
      <Grid.Column>
      <u>Learning</u>
      {tricksLearning}
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
            <Card.Description>
                {dog.breed?.name}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <span className='age'>{breed?.name} - {dog.age}{dog?.age > 1 ? " years old" : " year old"}</span>
            </a>
        </Card.Content>
    </Card>
)
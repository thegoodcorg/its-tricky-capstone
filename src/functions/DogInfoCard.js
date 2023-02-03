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
                <Card.Meta>
                    <Grid columns={2}>
                        <Grid.Column>
                            {tricksKnown}
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>
                    </Divider>
                        <Grid.Column>
                            {tricksLearning}
                        </Grid.Column>
                </Card.Meta>
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
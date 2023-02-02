import { Card, Icon, Image, Container } from 'semantic-ui-react'
import React from 'react'

export const DogInfoCard = ({ dog, tricks, breed }) => (


    <Card key={dog.id}>
        <Image src={breed?.image?.url} size="mini" wrapped ui={false} />
        <Card.Content>
            <Card.Header>{dog.name}</Card.Header>
            <Card.Meta>
                {tricks}
            </Card.Meta>
            <Card.Description>
                {dog?.breed?.name}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <span className='age'>{breed?.name} - {dog.age}{dog?.age > 1 ? " years old" : " year old"}</span>
            </a>
        </Card.Content>
    </Card>
)
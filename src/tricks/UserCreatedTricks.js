import ModalDeleteScreen from '../functions/ModalDeleteScreen'
import { Card } from 'semantic-ui-react'

export const UserCreatedTricks = ( { trickList, update } ) => {    
    
    const deleteListing = (id) => {
        fetch(`http://localhost:8088/tricks/${id}`, {
            method: "DELETE"
        }).then(update())
    }

   return <Card.Group className='userTrickCards'> {
   trickList.map(singleTrick => {
        return <Card key={singleTrick.id}>
        <Card.Content>
            <Card.Header>
            {singleTrick.name}
            </Card.Header>
        <Card.Description>
            {singleTrick.description}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <ModalDeleteScreen singleTrick={singleTrick} confirmDelete={deleteListing} />
        </Card.Content>
        </Card>
    }
    )}
    </Card.Group>
}

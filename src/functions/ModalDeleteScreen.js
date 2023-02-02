import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalDeleteScreen({singleTrick, confirmDelete}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Delete Trick</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)
        .then(confirmDelete(singleTrick.id)
      )}
    >
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>
        Are you sure you want to delete {singleTrick.name}?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => confirmDelete(singleTrick.id)}>
          <Icon name='checkmark' /> Delete
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalDeleteScreen


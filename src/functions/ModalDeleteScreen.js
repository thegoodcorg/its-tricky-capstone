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
        }
    >
      <Header icon='delete' color='red' content='WARNING' />
      <Modal.Content>
        <p className=''>
        Are you sure you want to delete {singleTrick.name}? This cannot be undone.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='red' onClick={() => confirmDelete(singleTrick?.id)}>
          <Icon name='checkmark' /> Delete
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalDeleteScreen


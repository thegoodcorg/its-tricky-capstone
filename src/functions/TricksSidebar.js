import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Tricks } from '../tricks/Tricks'
import "../tricks/trickSidebar.css"

export const TricksSidebar = () => { 
    return <Sidebar.Pushable as={Segment} >
    <Sidebar
    className='trickSidebar'
      as={Menu}
      animation='overlay'
      icon='labeled'
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='search' />
        Search
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='history' />
        Recently Viewed
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='info' />
        Information
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic className='trickContainer'>
        <Header as='h3'>Application Content</Header>
        <Tricks />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
}

import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Tricks } from '../tricks/Tricks'
import "../tricks/trickSidebar.css"

export const TricksSidebar = () => { 
    return <Sidebar
     className="sidebarModule"
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
 }

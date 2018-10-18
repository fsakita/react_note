import React from 'react'
import './Header.less'
import { Menu, Container, Button, Modal, Input } from 'semantic-ui-react'
import NoteForm from 'components/noteForm/NoteForm'

const Header = (props) => {

  return (
    <Menu borderless inverted className='c-header'>
      <Container>
        <Menu.Item header as='h3'>
          Notes App
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                <NoteForm text='' action='add' />
            </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Header

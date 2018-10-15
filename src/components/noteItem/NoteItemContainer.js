import React from 'react'

import { NoteItem } from './'

class NoteItemContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <NoteItem {...this.state} />
    )
  }
}

export default NoteItemContainer

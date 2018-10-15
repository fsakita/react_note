import React from 'react'
import { NoteList } from './'

class NoteListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

  }

  render () {
    return (
      <NoteList {...this.state} />
    )
  }
}

export default NoteListContainer

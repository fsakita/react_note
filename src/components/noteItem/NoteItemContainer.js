import React from 'react'
import { NoteItem } from './'
import { noteActions } from 'actions'
import { noteActionTypes} from 'actionTypes'

class NoteItemContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.handleClickRemove = this.handleClickRemove.bind(this)
  }

  handleClickRemove () {
    const { noteIndex } = this.props
    noteActions.asyncCall(noteActionTypes.NOTES_REMOVE_NOTE, noteIndex)
  }

  handleClickEdit () {

  }

  render () {
    return (
      <NoteItem handleClickEdit={this.handleClickEdit} handleClickRemove={this.handleClickRemove} {...this.props} />
    )
  }
}

export default NoteItemContainer

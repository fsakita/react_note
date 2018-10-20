import React from 'react'
import { NoteList } from './'
import { noteActions } from 'actions'
import { noteActionTypes } from 'actionTypes'
import { NoteStore } from 'stores'
import { Grid, Container } from 'semantic-ui-react'

class NoteListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.updateState = this.updateState.bind(this)
    NoteStore.addChangeListener(this.updateState)
  }

  componentDidMount () {
    noteActions.asyncCall(noteActionTypes.NOTES_GET_NOTES)
  }

  componentWillUnmount () {
    NoteStore.removeChangeListener(this.updateState)
  }

  updateState(state) {
    this.setState(
        state
    )
  }

  render () {
    let { notes} = this.state
    // console.log(notes)
    return (
      <div>
      {notes &&
        <NoteList {...this.state} />
      }
      {!notes || notes === undefined || notes.length === 0 &&
        <Grid container centered columns={1}>
          <Grid.Column>
            <Container textAlign='center'><h4>Create your first Note!</h4></Container>
          </Grid.Column>
        </Grid>
      }
      </div>
    )
  }
}

export default NoteListContainer

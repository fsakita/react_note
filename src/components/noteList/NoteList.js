import React from 'react'
import './NoteList.less'
import { NoteItemContainer } from 'components/noteItem'
import { Grid } from 'semantic-ui-react'

const NoteList = (props) => {
  let { notes } = props

  const notesList = () => {
    return notes.map((note, index) => {
      return (<NoteItemContainer key={index}
                                 noteIndex={index}
                                 note={note}
      />)
    })
  }

  return (
    <div className='c-note_list'>
      <Grid container>
          {notesList()}
      </Grid>
    </div>
  )
}

export default NoteList

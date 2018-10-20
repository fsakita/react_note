import React from 'react'
import './NoteItem.less'
import { Grid, Card, Label } from 'semantic-ui-react'
import NoteForm from 'components/noteForm/NoteForm'

const NoteItem = (props) => {
  let { note, noteIndex, handleClickRemove } = props

  return (
    <Grid.Column className='c-note_item' mobile={16} tablet={8} computer={4}>
      <Card className='c-note_item__card'>
        <Card.Content className='c-note_item__description' description={note.text} />
        <Card.Content className='c-note_item__card__tags'>
          {note.tags &&
          <Label.Group color='blue'>
            {note.tags.map((tag, index) => <Label key={index}>{tag}</Label>)}
          </Label.Group>
          }
        </Card.Content>
        <Card.Content extra>
          <div className='c-note_item__card__buttons'>
            <NoteForm {...note}
                      noteIndex={noteIndex}
                      action='edit'
            />
            <a className='c-note_item__card__buttons-remove' onClick={handleClickRemove}>Remove</a>
          </div>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default NoteItem

import React from 'react'
import './NoteList.less'
import { NoteItemContainer } from 'components/noteItem'

const NoteList = (props) => {

  return (
    <div className='c-note_list'>
      <p>NoteList</p>
      <NoteItemContainer />
    </div>
  )
}

export default NoteList

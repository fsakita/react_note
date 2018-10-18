import dispatcher from '../dispatcher'
import { noteActionTypes } from 'actionTypes'
import { NoteService } from 'services'

const noteActions = {
  action: (type) => {
    dispatcher.dispatch({type})
  },
  actionWithPayload: (type, payload) => {
    dispatcher.dispatch({type, payload})
  },
  asyncCall: (type, payload) => {
    let allNotes = NoteService.getNotes() || []
    switch (type) {
      case noteActionTypes.NOTES_ADD_NOTE:
        let { text, action, noteIndex, tags } = payload
        let noteObj = {
            text: text,
            tags: tags
        }
        if(action == 'edit'){
            allNotes[noteIndex] = noteObj
        } else {
            allNotes.push(noteObj)
        }
        NoteService.setNotes(allNotes, () => {
            noteActions.actionWithPayload(noteActionTypes.NOTES_SET_STATE, allNotes)
        })
        break
      case noteActionTypes.NOTES_GET_NOTES:
        if (allNotes) {
            noteActions.actionWithPayload(noteActionTypes.NOTES_SET_STATE, allNotes)
        }
        break
      case noteActionTypes.NOTES_REMOVE_NOTE:
        allNotes.splice(payload, 1)
        NoteService.setNotes(allNotes, () => {
            noteActions.actionWithPayload(noteActionTypes.NOTES_SET_STATE, allNotes)
        })
        break
      default:
        break
    }
  }
}

export default noteActions

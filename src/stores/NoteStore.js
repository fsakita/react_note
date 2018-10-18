import dispatcher from '../dispatcher'
import { noteActionTypes } from 'actionTypes'

import BaseStore from './BaseStore'
import { EVENTS } from 'strings'

class NoteStore extends BaseStore {
  constructor () {
    super()

    this.state = {}

    this.initialState = Object.assign({}, this.state)

    dispatcher.register(e => {
      switch (e.type) {
        case noteActionTypes.NOTES_SET_STATE:
          this.updateState(e.payload)
          break

        default:
          break
      }
      this.emit(EVENTS.CHANGE, this.state)
    })
  }

  getState () {
    return this.state
  }

  updateState (data) {
    let currentState = this.state
    let newState = Object.assign({},
      currentState
    )
    newState.notes = data

    this.state = newState
  }
}

export default new NoteStore()

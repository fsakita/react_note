/* global jest, describe, it, expect, beforeEach  */

import { noteActionTypes } from 'actionTypes'
import { noteActions } from 'actions/noteActions'
import { NoteService } from 'services'
import { NoteStore } from 'stores'

jest.mock('actions/noteActions')
jest.dontMock('services/NoteService')

describe('NoteStore', () => {

  it('should add content to state and get it', () => {
    NoteStore.updateState('test')
    expect(NoteStore.state).toEqual({"notes": "test"})
    const NoteState = NoteStore.getState()
    expect(NoteState).toEqual({"notes": "test"})
  })
})

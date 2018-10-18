/* global jest, describe, it, expect, beforeEach  */

import {noteActionTypes} from 'actionTypes'
import {noteActions} from 'actions/noteActions'
import { NoteService } from 'services'
import { NoteStore } from 'stores'

jest.mock('actions/noteActions')
jest.dontMock('services/NoteService')

describe('noteActions', () => {
  let payload = {}

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should call NoteService.setNotes when NOTES_REMOVE_NOTE', () => {
    const spy = jest.spyOn(NoteService, 'setNotes')
    expect(spy).not.toHaveBeenCalled()
    noteActions.asyncCall(noteActionTypes.NOTES_REMOVE_NOTE, payload)
    expect(spy).toHaveBeenCalled()
  })
  it('should call NoteService.setNotes when NOTES_ADD_NOTE', () => {
    const spy = jest.spyOn(NoteService, 'setNotes')
    expect(spy).not.toHaveBeenCalled()
    noteActions.asyncCall(noteActionTypes.NOTES_ADD_NOTE, payload)
    expect(spy).toHaveBeenCalled()
  })
  it('should call NoteService.setNotes when NOTES_GET_NOTES', () => {
    const spy = jest.spyOn(noteActions, 'actionWithPayload')
    expect(spy).not.toHaveBeenCalled()
    noteActions.asyncCall(noteActionTypes.NOTES_GET_NOTES, payload)
    expect(spy).toHaveBeenCalled()
  })
})

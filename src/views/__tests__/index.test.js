/* global jest, describe, it, expect, beforeEach,afterEach */

import * as React from 'react'
import { shallow } from 'enzyme'
import NotesApp from '../'
import { NoteListContainer } from 'components/noteList'

describe('NotesApp', () => {
  let shallowComponent

  const shallowComp = () => {
    if (!shallowComponent) {
      shallowComponent = shallow(
        <NotesApp />
      )
    }
    return shallowComponent
  }

  beforeEach(() => {
    shallowComponent = undefined
  })

  it('should always contain a NoteListContainer component', () => {
    const comp = shallowComp().find(NoteListContainer)
    expect(comp.length).toEqual(1)
  })
})

/* global jest, describe, it, expect, beforeEach,afterEach */

import * as React from 'react'
import { shallow, mount } from 'enzyme'
import NoteForm from '../NoteForm'

describe('NoteForm', () => {
  let state = { 
    modalOpen: false,
    text: '',
    action: '',
    noteIndex: '',
    tagsInputValue: '',
    tags: []
  }

  let mountedComponent
  let shallowComponent
  let mockHandleOpen = jest.fn()
  let mockHandleClose = jest.fn()
  let mockHandleChange = jest.fn()
  let mockHandleSubmit = jest.fn()
  let mockAddTag = jest.fn()
  let mockUpdateTagValue = jest.fn()

  const mountedComp = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <NoteForm {...state}
            handleClickRemove={mockHandleOpen}
            handleClose={mockHandleClose}
            handleChange={mockHandleChange}
            handleSubmit={mockHandleSubmit}
            addTag={mockAddTag}
            updateTagValue={mockUpdateTagValue}
        />
      )
    }
    return mountedComponent
  }

  const shallowComp = () => {
    if (!shallowComponent) {
      shallowComponent = shallow(
        <NoteForm {...state}
            handleClickRemove={mockHandleOpen}
            handleClose={mockHandleClose}
            handleChange={mockHandleChange}
            handleSubmit={mockHandleSubmit}
            addTag={mockAddTag}
            updateTagValue={mockUpdateTagValue}
        />
      )
    }
    return shallowComponent
  }

  beforeEach(() => {
    mountedComponent = undefined
    shallowComponent = undefined
  })

  it('should contain a Modal', () => {
    const comp = shallowComp().find('Modal')
    expect(comp.length).toEqual(1)
  })
})

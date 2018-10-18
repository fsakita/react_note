/* global jest, describe, it, expect, beforeEach,afterEach */

import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { NoteItem } from '../'

describe('NoteList', () => {
  let props = {
    note:{
        text: '',
        tags: []
    },
    noteIndex: ''
  }

  let mountedComponent
  let shallowComponent
  let mockHandleClickRemove = jest.fn()

  const mountedComp = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <NoteItem {...props} handleClickRemove={mockHandleClickRemove } />
      )
    }
    return mountedComponent
  }

  const shallowComp = () => {
    if (!shallowComponent) {
      shallowComponent = shallow(
        <NoteItem {...props} handleClickRemove={mockHandleClickRemove } />
      )
    }
    return shallowComponent
  }

  beforeEach(() => {
    mountedComponent = undefined
    shallowComponent = undefined
  })

  it('should contain a Grid Column with class .c-note_item', () => {
    const comp = shallowComp().find('.c-note_item')
    expect(comp.length).toEqual(1)
  })
  it('should contain a Card with class .c-note_item__card', () => {
    const comp = shallowComp().find('.c-note_item__card')
    expect(comp.length).toEqual(1)
  })
  it('should contain a component Label if props tags > 0', () => {
    props = {
        note:{
            tags:[
                'test'
            ]
        }
    }
    const comp = mountedComp().find('Label')
    expect(comp.length).toEqual(1)
  })
  it('should contain a NoteForm component', () => {
    const comp = shallowComp().find('NoteForm')
    expect(comp.length).toEqual(1)
  })
})

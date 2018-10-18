/* global jest, describe, it, expect, beforeEach,afterEach */

import * as React from 'react'
import { shallow } from 'enzyme'
import { NoteList } from '../'

describe('NoteList', () => {
  let shallowComponent
  let props = {
    notes:[]
  }

  const shallowComp = () => {
    if (!shallowComponent) {
      shallowComponent = shallow(
        <NoteList {...props} />
      )
    }
    return shallowComponent
  }

  beforeEach(() => {
    shallowComponent = undefined
  })

  it('should contain a div with class .c-note_list', () => {
    const comp = shallowComp().find('.c-note_list')
    expect(comp.length).toEqual(1)
  })
  it('should contain a component Grid', () => {
    const comp = shallowComp().find('Grid')
    expect(comp.length).toEqual(1)
  })
  it('should contain a component NoteItemContainer if props notes > 0', () => {
    props = {
        notes:[
            { note: ' ' }
        ]
    }
    const comp = shallowComp().find('NoteItemContainer')
    expect(comp.length).toEqual(1)
  })
})

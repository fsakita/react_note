/* global jest, describe, it, expect, beforeEach,afterEach */

import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { Header } from '../'

describe('Header', () => {
  let props = {}
  let shallowComponent

  const shallowComp = () => {
    if (!shallowComponent) {
      shallowComponent = shallow(
        <Header />
      )
    }
    return shallowComponent
  }

  beforeEach(() => {
    shallowComponent = undefined
  })

  it('should contain a Menu with class .c-header', () => {
    const comp = shallowComp().find('.c-header')
    expect(comp.length).toEqual(1)
  })
})

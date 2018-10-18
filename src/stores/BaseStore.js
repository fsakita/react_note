/**
 * @file      Stores
 * @class       BaseStore
 * @description A base to be inherited from all stores, contains generic store behaviour methods.
 */
import { EventEmitter } from 'eventemitter3'
import { EVENTS } from 'strings'

class BaseStore extends EventEmitter {
  emitChange () {
    this.emit(EVENTS.CHANGE)
  }

  addChangeListener (cb, comp) {
    this.on(EVENTS.CHANGE, cb)
  }

  removeChangeListener (cb) {
    this.removeListener(EVENTS.CHANGE, cb)
  }
}

export default BaseStore

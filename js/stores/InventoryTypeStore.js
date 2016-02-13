/* @flow */

import { Store } from 'flux/utils'
import { Map } from 'immutable'

import AppDispatcher from '../dispatcher/AppDispatcher'
import Actions from '../constants/ActionConstants'

class InventoryTypeStore extends Store {
  getInitialState() {
    return Map()
  }

  __onDispatch(action) {
    switch(action.type) {
    case Actions.LOAD_INVENTORY_ITEMS:
    }
  }

}

const inventoryTypeStore = new InventoryTypeStore(AppDispatcher)
export default inventoryTypeStore

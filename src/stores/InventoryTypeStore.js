/* @flow */

import { Store } from 'flux/utils'
import { Map } from 'immutable'

import AppDispatcher from '../dispatcher/AppDispatcher'
import { Action, ActionType } from '../../lib/index'

class InventoryTypeStore extends Store {
  getInitialState() {
    return Map()
  }

  __onDispatch(action: Action) {
    switch(action.type) {
    case ActionType.LOAD_INVENTORY_ITEMS:
    }
  }

}

const inventoryTypeStore = new InventoryTypeStore(AppDispatcher)
export default inventoryTypeStore

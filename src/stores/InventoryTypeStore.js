/* @flow */

import { ReduceStore } from 'flux/utils'
import { List } from 'immutable'

import AppDispatcher from '../dispatcher/AppDispatcher'
import { Action, LoadAction, ActionType, InventoryType } from '../../lib/index'

type State = List<InventoryType>

class InventoryTypeStore extends ReduceStore<InventoryType> {
  getInitialState(): State {
    return List()
  }

  reduce(state: State, action: Action): State {
    if (action instanceof LoadAction) {
      switch (action.get('type')) {
        case ActionType.LOAD_INVENTORY_TYPES:
          return action.payload
        default:
          return state
      }
    }
  }


}

const inventoryTypeStore = new InventoryTypeStore(AppDispatcher)
export default inventoryTypeStore

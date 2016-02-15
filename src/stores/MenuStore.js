/* @flow */

import { ReduceStore } from 'flux/utils'
import { List } from 'immutable'

import AppDispatcher from '../dispatcher/AppDispatcher'
import { MenuCategory, Action, LoadAction, ActionType } from '../../lib/index'

type State = List<MenuCategory>

class MenuStore extends ReduceStore<MenuCategory> {
  getInitialState(): State {
    return List()
  }

  reduce(state: State, action: Action): State {
    if (action instanceof LoadAction) {
      switch(action.get('type')) {
        case ActionType.LOAD_CATEGORIES:
          return action.payload
        case ActionType.LOAD_INVENTORY_TYPES:
        default:
          return state
      }
    // } else if (action instanceof SelectAction) {
    //   switch(action.type) {
    //     case Actions.SELECT_CATEGORY:
    //     case Actions.SELECT_LIST_ITEM:
    //     case Actions.DESELECT_LIST_ITEM:
    //     default:
    //   }
    }
  }
}

const menuStore = new MenuStore(AppDispatcher)
export default menuStore

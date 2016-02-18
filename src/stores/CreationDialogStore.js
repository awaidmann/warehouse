/* @flow */

import { ReduceStore } from 'flux/utils'
import { Map } from 'immutable'

import AppDispatcher from '../dispatcher/AppDispatcher'
import { Action, TextEditAction, ActionType } from '../../lib/index'

type State = {
  fieldValues: Map<string, string>
}

class CreationDialogStore extends ReduceStore<State> {
  getInitialState(): State {
    return { fieldValues: Map() }
  }

  reduce(state: State, action: Action): State {
    if (action instanceof TextEditAction) {
      switch(action.get('type')) {
        case ActionType.TEXT_DID_CHANGE:
          return state
        case ActionType.TEXT_DID_FOCUS:
          return state
        case ActionType.TEXT_DID_LOSE_FOCUS:
          return state
        default:
          return state
      }
    }
  }
}

const creationStore = new CreationDialogStore(AppDispatcher)
export default creationStore

/* @flow */

import { MapStore } from 'flux/utils'
import { Map, List } from 'immutable'

import AppDispatcher from '../dispatcher/AppDispatcher'
import { Action, TextEditAction, SelectAction, ActionType } from '../../lib/index'

const FIELD_VALUES_KEY = 'fieldValues'
const FOCUSED_KEY = 'focusedFieldRef'
const AUTO_COMPLETE_KEY = 'autoCompDataSrc'

type State = Map<string, any>

class CreationDialogStore extends MapStore<string, any> {
  getInitialState(): State {
    return Map({
      fieldValues: Map(),
      focusedFieldRef: undefined,
      autoCompDataSrc: List(),
    })
  }

  reduce(state: State, action: Action): State {
    if (action instanceof TextEditAction) {
      switch(action.get('type')) {
        case ActionType.TEXT_DID_CHANGE:
          //could store prevValue in fieldValues, fieldValues: {'ref': {prev:'', crnt:''} }
          const updateText = state.get(FIELD_VALUES_KEY).set(action.get('textFieldRef'), action.get('crntText'))
          return state.set(FIELD_VALUES_KEY, updateText)//CreationDialogStore.updateAutoCompletionDataSource(updateText, action.get('crntText'))
        case ActionType.TEXT_DID_FOCUS:
          const updateFocus = action.get('textFieldRef')
          return state.set(FOCUSED_KEY, updateFocus)//CreationDialogStore.updateAutoCompletionDataSource(updateFocus, '')
        case ActionType.TEXT_DID_LOSE_FOCUS:
          if (action.get('textFieldRef') === state.get(FOCUSED_KEY)) { // check in case actions are received out of order
            return state.merge({ focusedFieldRef: undefined, autoCompDataSrc: List() })
          }
      }
    } else if (action instanceof SelectAction) {
        switch (action.get('type')) {
          case ActionType.SELECT_LIST_ITEM:
            const indexPath = action.get('indexPath')
            const fieldRef = indexPath ? indexPath.get(0) : undefined
            const compIndex = indexPath ? indexPath.get(1) : undefined
            if (fieldRef && compIndex && state.autoCompDataSrc) {
              const selected = state.get(AUTO_COMPLETE_KEY).get(compIndex)
              const updatedSlxn = state.get(FIELD_VALUES_KEY).set(fieldRef, selected)
              return state.set(FIELD_VALUES_KEY, updatedSlxn)//CreationDialogStore.updateAutoCompletionDataSource(state, selected)
            }
        }
    }
    return state
  }

  static updateAutoCompletionDataSource(state: State, updatedText: string): State {
    return state
  }
}

const creationStore = new CreationDialogStore(AppDispatcher)
export default creationStore

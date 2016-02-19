/* @flow */

import AppDispatcher from '../dispatcher/AppDispatcher'
import { Action, TextEditAction, ActionType } from '../../lib/index'

export default class TextFieldEmitter {
  static textFieldDidUpdate(prevText: string, crntText: string, textFieldRef: string) {
    const update = new TextEditAction(ActionType.TEXT_DID_CHANGE, prevText, crntText, textFieldRef)
    AppDispatcher.dispatch(update)
  }
}

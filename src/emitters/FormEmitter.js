/* @flow */

import AppDispatcher from '../dispatcher/AppDispatcher'
import { Action, TextEditAction, FormAction, ActionType } from '../../lib/index'

export default class FormEmitter {

  static textFieldDidUpdate(prevText: string, crntText: string, textFieldRef: string) {
    const update = new TextEditAction(ActionType.TEXT_DID_CHANGE, prevText, crntText, textFieldRef)
    AppDispatcher.dispatch(update)
  }

  static formShouldOpen(id: string) {
    const open = new FormAction(ActionType.FORM_SHOULD_OPEN, id)
    AppDispatcher.dispatch(open)
  }

  static formDidCancel(id: string) {
    const cancel = new FormAction(ActionType.FORM_DID_CANCEL, id)
    AppDispatcher.dispatch(cancel)
  }

  static formDidSubmit(id: string, data: ?Object) {
    const submit = new FormAction(ActionType.FORM_DID_SUBMIT, id, data)
    AppDispatcher.dispatch(submit)
  }

  static formDidClear() {

  }
}

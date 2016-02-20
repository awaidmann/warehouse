/* @flow */

import Payload from './Payload'
import Dispatcher from '../../src/dispatcher/AppDispatcher'
import { List, Record } from 'immutable'

const ActionRecord = Record({ type: undefined })

export default class Action extends ActionRecord{
  type: string;
  constructor(type: string) {
    super({ type })
  }

  getType(): string {
    return this.get('type')
  }
}

export class LoadAction extends Action {
  payload: List<Payload>;
  constructor(type: string, payload: ?List<Payload>) {
    super(type)
    this.payload = payload ? payload : List()
  }
}

export class SelectAction extends Action {
  indexPath: List<string>;
  constructor(type: string, indexPath: List<string>) {
    super(type)
    this.indexPath = indexPath
  }
}

export class TextEditAction extends Action {
  prevText: string;
  crntText: string;
  textFieldRef: string;
  constructor(type: string, prevText: string, crntText: string, textFieldRef: string ) {
    super(type)
    this.prevText = prevText
    this.crntText = crntText
    this.textFieldRef = textFieldRef
  }

  updateTextField(updatedText: string): TextEditAction {
    const updated = new TextEditAction(this.getType(), this.crntText, this.updatedText, this.textFieldRef)
    Dispatcher.dispatch(updated)
    return updated
  }
}

export class FormAction extends Action {
  formId: string;
  data: ?Object;
  constructor(type: string, id: string, data: ?Object) {
    super(type)
    this.formId = id
    this.data = data
  }
}

// declare class CRUDAction extends Action {
//   id: string,
// }
//

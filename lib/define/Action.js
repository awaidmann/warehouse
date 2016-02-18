/* @flow */

import Payload from './Payload'
import { List, Record } from 'immutable'

const ActionRecord = Record({ type: undefined })

export default class Action extends ActionRecord{
  type: string;
  constructor(type: string) {
    super({ type })
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

// declare class CRUDAction extends Action {
//   id: string,
// }
//

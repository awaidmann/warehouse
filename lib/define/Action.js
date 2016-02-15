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
  payload: List<typeof Payload>;
  constructor(type: string, payload: ?List<typeof Payload>) {
    super(type)
    if (payload) {
      this.payload = payload
    }
  }
}

// declare class CRUDAction extends Action {
//   id: string,
// }
//
// declare class SelectAction extends Action {
//   indexPath: Array<string>,
// }

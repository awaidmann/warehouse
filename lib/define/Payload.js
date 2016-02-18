/* @flow */

import { Record, List } from 'immutable'

const PayloadRecord = Record({
  id: undefined,
  title: undefined,
  indexPath: undefined,
})

export default class Payload extends PayloadRecord {
  id: string;
  title: string;
  indexPath: List<string>;

  constructor(id: string, title: string, indexPath: ?List<string> | ?Array<string>) {
    let sanitized = indexPath ? indexPath : List([id])
    if (indexPath instanceof Array) {
      sanitized = List(indexPath)
    }
    super({
      id,
      title,
      indexPath: sanitized
    })
  }
}

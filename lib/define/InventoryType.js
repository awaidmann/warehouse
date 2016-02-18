/* @flow */

import { Record, List } from 'immutable'
import Payload from './Payload'

const InventoryModelRecord = Record({
  id: undefined,
  make: undefined,
  model: undefined,
})

export class InventoryModel extends InventoryModelRecord{
  id: string;
  make: string;
  model: string;

  constructor(id: string, make: string, model: string) {
    super({ id, make, model })
  }
}

export default class InventoryType extends Payload {
  model: ?InventoryModel;

  constructor(id: string, title: string, indexPath: ?List<string> | ?Array<string>, model: ?InventoryModel) {
    super(id, title, indexPath)
  }
}

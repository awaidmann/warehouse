/* @flow */

import { Record, List } from 'immutable'

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

const InventoryTypeRecord = Record({
  id: undefined,
  title: undefined,
  typePath: undefined,
  model: undefined,
})

export default class InventoryType extends InventoryTypeRecord {
  id: string;
  title: string;
  typePath: List<string>;
  model: ?InventoryModel;

  constructor(id: string, title: string, typePath: ?List<string> | ?Array<string>, model: ?InventoryModel) {
    let sanitized = typePath ? typePath : List()
    if (typePath instanceof Array) {
      sanitized = List(typePath)
    }
    super({
      id,
      title,
      typePath: sanitized,
      model
    })
  }

  updatePath(newTypePath: ?List<string>): InventoryType {
    if (newTypePath) {
      return new InventoryType(this.id, this.title, newTypePath, this.model)
    }
    return this
  }
}

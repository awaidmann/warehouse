/* @flow */

declare class InventoryModel {
  id: string,
  make: string,
  model: string,
}

declare class InventoryType {
  name: string,
  subtypes: Array<InventoryType | InventoryModel>
}

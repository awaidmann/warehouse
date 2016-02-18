/* @flow */

// NOTE: Consider using Symbol('..') instead
const ActionName = {
  // SERVER LOAD
  LOAD_CATEGORIES: 'load/categories',
  LOAD_INVENTORY_ITEMS: 'load/inventory_items',
  LOAD_INVENTORY_TYPES: 'load/inventory_types',
  LOAD_NOTIFICATIONS: 'load/notifications',
  LOAD_CONTAINERS: 'load/containers',
  LOAD_SHIPMENTS: 'load/shipments',
  LOAD_SHOWS: 'load/shows',

  // SELECTION
  SELECT_CATEGORY: 'select/category',
  SELECT_LIST_ITEM: 'select/list_item',
  DESELECT_LIST_ITEM: 'deselect/list_item',

  // TEXT FIELD
  TEXT_DID_CHANGE: 'text/did_change',
  TEXT_DID_FOCUS: 'text/did_focus',
  TEXT_DID_LOSE_FOCUS: 'text/did_lose_focus', 

  // CREATION
  CREATE_INVENTORY_ITEM: 'create/inventory_item',
  CREATE_INVENTORY_TYPE: 'create/inventory_type',
  CREATE_NOTIFICATION: 'create/notification',
  CREATE_CONTAINER: 'create/container',
  CREATE_SHIPMENT: 'create/shipment',
  CREATE_SHOW: 'create/show',

  // DELETE
  DELETE_INVENTORY_ITEM: 'delete/inventory_item',
  DELETE_INVENTORY_TYPE: 'delete/inventory_type',
  DELETE_NOTIFICATION: 'delete/notification',
  DELETE_CONTAINER: 'delete/container',
  DELETE_SHIPMENT: 'delete/shipment',
  DELETE_SHOW: 'delete/show'
}

export default ActionName

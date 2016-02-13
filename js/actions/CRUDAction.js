/* @flow */

import Actions from '../constants/ActionConstants'

export type CRUDAction = {
  type: Actions.CREATE_INVENTORY_ITEM,
} | {
  type: Actions.CREATE_INVENTORY_TYPE,
} | {
  type: Actions.CREATE_NOTIFICATION,
} | {
  type: Actions.CREATE_CONTAINER,
} | {
  type: Actions.CREATE_SHIPMENT,
} | {
  type: Actions.CREATE_SHOW,
} | {
  type: Actions.DELETE_INVENTORY_ITEM,
} | {
  type: Actions.DELETE_INVENTORY_TYPE,
} | {
  type: Actions.DELETE_NOTIFICATION,
} | {
  type: Actions.DELETE_CONTAINER,
} | {
  type: Actions.DELETE_SHIPMENT,
} | {
  type: Actions.DELETE_SHOW,
}

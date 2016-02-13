/* @flow */

import Actions from '../constants/ActionConstants'

export type LoadAction = {
  type: Actions.LOAD_CATEGORIES,
  categories: Array<string>,
} | {
  type: Actions.LOAD_INVENTORY_ITEMS,
} | {
  type: Actions.LOAD_INVENTORY_TYPES,
} | {
  type: Actions.LOAD_NOTIFICATIONS,
} | {
  type: Actions.LOAD_CONTAINERS,
} | {
  type: Actions.LOAD_SHIPMENTS,
} | {
  type: Actions.LOAD_SHOWS,
}

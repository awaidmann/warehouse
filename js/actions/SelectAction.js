/* @flow */

import Actions from '../constants/ActionConstants'

export type SelectAction = {
  type: Actions.SELECT_CATEGORY,
  category: string,
} | {
  type: Actions.SELECT_LIST_ITEM
} | {
  type: Actions.DESELECT_LIST_ITEM
}

/* @flow */

import { List } from 'immutable'

import AppDispatcher from '../src/dispatcher/AppDispatcher'
import { LoadAction, ActionType, InventoryType } from '../lib/index'

const mockInventoryTypes = List([
    new InventoryType('1','A',List(['1'])),
    new InventoryType('2','B',List(['1','2'])),
    new InventoryType('3','C',List(['1','3'])),
    new InventoryType('4','D',List(['4'])),
    new InventoryType('5','E',List(['4','6','7','5'])),
    new InventoryType('6','F',List(['4','6'])),
    new InventoryType('7','G',List(['4','6','7'])),
    new InventoryType('8','H',List(['1','2','8'])),
    new InventoryType('9','I',List(['4','6','9'])),
    new InventoryType('10','J',List(['1','10'])),
  ])

export default function emitInventoryTypes() {
  AppDispatcher.dispatch( new LoadAction(ActionType.LOAD_INVENTORY_TYPES, mockInventoryTypes) )
}

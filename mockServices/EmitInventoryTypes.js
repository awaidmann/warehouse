/* @flow */

import { List } from 'immutable'

import AppDispatcher from '../src/dispatcher/AppDispatcher'
import { LoadAction, ActionType, InventoryType } from '../lib/index'

const mockInventoryTypes = List([
    new InventoryType('1','Mover',List(['1'])),
    new InventoryType('2','Small',List(['1','2'])),
    new InventoryType('3','Medium',List(['1','3'])),
    new InventoryType('4','Scaffold',List(['4'])),
    new InventoryType('5','w/ Ladder',List(['4','6','7','5'])),
    new InventoryType('6','Steel',List(['4','6'])),
    new InventoryType('7','Vertical',List(['4','6','7'])),
    new InventoryType('8','LED',List(['1','2','8'])),
    new InventoryType('9','Horizontal',List(['4','6','9'])),
    new InventoryType('10','Large',List(['1','10'])),
  ])

export default function emitInventoryTypes() {
  AppDispatcher.dispatch( new LoadAction(ActionType.LOAD_INVENTORY_TYPES, mockInventoryTypes) )
}

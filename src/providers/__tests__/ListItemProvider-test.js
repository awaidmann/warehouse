import React from 'react'
// import TestUtils from 'react-addons-test-utils'
import Immutable from 'immutable'
import InventoryType from '../../../lib/define/InventoryType'
import ListItemProvider from '../ListItemProvider'

const LIST_ROOT_KEY = 'ROOT'

describe('buildHierarchy', () => {
  var mockInventoryTypes
  beforeEach( () => {
    mockInventoryTypes = Immutable.List([
      new InventoryType('1','A',Immutable.List(['1'])),
      new InventoryType('2','B',Immutable.List(['1','2'])),
      new InventoryType('3','C',Immutable.List(['1','3'])),
      new InventoryType('4','D',Immutable.List(['4'])),
      new InventoryType('5','E',Immutable.List(['4','6','7','5'])),
      new InventoryType('6','F',Immutable.List(['4','6'])),
      new InventoryType('7','G',Immutable.List(['4','6','7'])),
      new InventoryType('8','H',Immutable.List(['1','2','8'])),
      new InventoryType('9','I',Immutable.List(['4','6','9'])),
      new InventoryType('10','J',Immutable.List(['1','10'])),
    ])
  })

  it('returns non-falsy value for valid data', () => {
    const hierarchy = ListItemProvider.buildHierarchy(mockInventoryTypes)
    expect(hierarchy).not.toBeFalsy()
  })

  it('returns non-falsy value for empty array and List', () => {
    expect(ListItemProvider.buildHierarchy(Immutable.List())).not.toBeFalsy()
    expect(ListItemProvider.buildHierarchy([])).not.toBeFalsy()
  })

  it('returns non-falsy value for null/undefined data', () => {
    expect(ListItemProvider.buildHierarchy(null)).not.toBeFalsy()
    expect(ListItemProvider.buildHierarchy(undefined)).not.toBeFalsy()
  })

  it('constructs KeyedIterable of type <string, KeyedIterable<string, ...>>', () => {
    const hierarchy = ListItemProvider.buildHierarchy(mockInventoryTypes)
    if (hierarchy) {
      expect(hierarchy.get('1')).toBeTruthy()
      expect(hierarchy.get('4')).toBeTruthy()
      expect(hierarchy.get(LIST_ROOT_KEY)).toBeFalsy()

      expect(hierarchy.get('1').get(LIST_ROOT_KEY)).toBeTruthy()
      expect(hierarchy.get('4').get(LIST_ROOT_KEY)).toBeTruthy()

      expect(hierarchy.get('1').get('2')).toBeTruthy()
      expect(hierarchy.get('1').get('2').get(LIST_ROOT_KEY)).toBeTruthy()
      expect(hierarchy.get('1').get('2').get('8')).toBeTruthy()
      expect(hierarchy.get('1').get('2').get('8').get(LIST_ROOT_KEY)).toBeTruthy()

      expect(hierarchy.get('1').get('3')).toBeTruthy()
      expect(hierarchy.get('1').get('3').get(LIST_ROOT_KEY)).toBeTruthy()
      expect(hierarchy.get('1').get('10')).toBeTruthy()
      expect(hierarchy.get('1').get('10').get(LIST_ROOT_KEY)).toBeTruthy()

      expect(hierarchy.get('4').get('6')).toBeTruthy()
      expect(hierarchy.get('4').get('6').get(LIST_ROOT_KEY)).toBeTruthy()
      expect(hierarchy.get('4').get('6').get('7')).toBeTruthy()
      expect(hierarchy.get('4').get('6').get('7').get(LIST_ROOT_KEY)).toBeTruthy()
      expect(hierarchy.get('4').get('6').get('7').get('5')).toBeTruthy()
      expect(hierarchy.get('4').get('6').get('7').get('5').get(LIST_ROOT_KEY)).toBeTruthy()
      expect(hierarchy.get('4').get('6').get('9')).toBeTruthy()
      expect(hierarchy.get('4').get('6').get('9').get(LIST_ROOT_KEY)).toBeTruthy()

    } else {
      expect(true).not.toBeTruthy()
    }

  })
})

describe('buildListComponents', () => {
  var mockInventoryTypes
  beforeEach( () => {
    mockInventoryTypes = Immutable.List([
      new InventoryType('1','A',Immutable.List(['1'])),
      new InventoryType('2','B',Immutable.List(['1','2'])),
      new InventoryType('3','C',Immutable.List(['1','3'])),
      new InventoryType('4','D',Immutable.List(['4'])),
      new InventoryType('5','E',Immutable.List(['4','6','7','5'])),
      new InventoryType('6','F',Immutable.List(['4','6'])),
      new InventoryType('7','G',Immutable.List(['4','6','7'])),
      new InventoryType('8','H',Immutable.List(['1','2','8'])),
      new InventoryType('9','I',Immutable.List(['4','6','9'])),
      new InventoryType('10','J',Immutable.List(['1','10'])),
    ])
  })

  it('returns a non-falsy/empty value', () => {
    ListItemProvider.buildListComponents(ListItemProvider.buildHierarchy(mockInventoryTypes))
  })

  it('returns non-falsy value for empty KeyedIterable', () => {
    expect(ListItemProvider.buildListComponents(Immutable.KeyedIterable())).not.toBeFalsy()
  })

  it('returns non-falsy value for null/undefined data', () => {
    expect(ListItemProvider.buildListComponents(null)).not.toBeFalsy()
    expect(ListItemProvider.buildListComponents(undefined)).not.toBeFalsy()
  })

})

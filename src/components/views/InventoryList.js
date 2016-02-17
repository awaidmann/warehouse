/* @flow */

import React, { Component } from 'react'
import { List } from 'immutable'
import MUIList from 'material-ui/lib/lists/list'

import AppDispatcher from '../../dispatcher/AppDispatcher'
import { InventoryType } from '../../../lib/index'
import { ListItemProvider } from '../../providers/index'

type Props = List<InventoryType>

export default class InventoryList extends Component<{}, Props, {}> {

  static _inventoryHierarchy(listItems: ?List<InventoryType>): Array<?ReactElement> {
    if (listItems) {
      return ListItemProvider.buildListComponents(ListItemProvider.buildHierarchy(listItems))
    }
    return []
  }

  render(): ?ReactElement {
    return (
      <MUIList>
        { InventoryList._inventoryHierarchy(this.props.listItems) }
      </MUIList>
    )
  }
}

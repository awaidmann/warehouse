/* @flow */

import React, { Component } from 'react'
import { Container } from 'flux/utils'
import { List } from 'immutable'

import LeftNav from 'material-ui/lib/left-nav'
import MUIList from 'material-ui/lib/lists/list'
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance'

import AppDispatcher from '../../dispatcher/AppDispatcher'
import { Payload } from '../../../lib/index'
import { ListItemProvider } from '../../providers/index'
import { InventoryTypeStore } from '../../stores/index'

const SelectableList = SelectableContainerEnhance(MUIList)

type State = {
  displayItems: List<typeof Payload>,
  selectedIndex: string,
}

class DisplayListContainer extends Component<{}, {}, State> {
  static getStores() {
    return [InventoryTypeStore]
  }

  static calculateState(prevState: State): State {
    return {
      displayItems: InventoryTypeStore.getState(),
      selectedIndex: '',
    }
  }

  static inventoryHierarchy(listItems: ?List<typeof Payload>): Array<?ReactElement> {
    if (listItems) {
      return ListItemProvider.buildListComponents(ListItemProvider.buildHierarchy(listItems))
    }
    return []
  }

  onUpdateSelectedIndex(evt, index: string) {
    // this.setState({ selectedIndex: index })
  }

  render(): ?ReactElement {
    return (
      <div>
        <LeftNav>
          <SelectableList valueLink={{
              value: this.state.selectedIndex,
              requestChange: this.onUpdateSelectedIndex,
            }}>
            { DisplayListContainer.inventoryHierarchy(this.state.displayItems) }
          </SelectableList>
        </LeftNav>
      </div>
    )
  }
}

const container = Container.create(DisplayListContainer)
export default container

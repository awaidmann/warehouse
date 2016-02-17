/* @flow */

import React from 'react'
import { Container } from 'flux/utils'
import { List } from 'immutable'

import Menu from '../views/Menu'
import InventoryList from '../views/InventoryList'
import { MenuStore, InventoryTypeStore } from '../../stores/index'
import { MenuCategory, Payload } from '../../../lib/index'

type State = {
  categories: List<MenuCategory>,
  displayItems: List<typeof Payload>
}

class MenuContainer extends React.Component<{}, {}, State> {
  static getStores() {
    return [MenuStore, InventoryTypeStore]
  }

  static calculateState(prevState: State): State {
    return {
      categories: MenuStore.getState(),
      displayItems: InventoryTypeStore.getState()
    }
  }

  render(): ?ReactElement {
    return (
      <div>
        <Menu categories={ this.state.categories } />
        <InventoryList listItems={ this.state.displayItems }/>
      </div>
      )
  }
}

const container = Container.create(MenuContainer)
export default container

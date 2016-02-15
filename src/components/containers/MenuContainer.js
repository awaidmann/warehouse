/* @flow */

import React from 'react'
import { Container } from 'flux/utils'
import { List } from 'immutable'

import MenuStore from '../../stores/MenuStore'
import Menu from '../views/Menu'
import { MenuCategory } from '../../../lib/index'

type State = {
  categories: List<MenuCategory>
}

class MenuContainer extends React.Component<{}, {}, State> {
  static getStores() {
    return [MenuStore]
  }

  static calculateState(prevState: State): State {
    return {categories: MenuStore.getState()}
  }

  render(): ?ReactElement {
    return <Menu categories={ this.state.categories } />
  }
}

const container = Container.create(MenuContainer)
export default container

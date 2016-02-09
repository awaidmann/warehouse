import React, { Component } from 'react'
import { Container } from 'flux/utils'

import MenuStore from '../../stores/MenuStore'
import Menu from '../views/Menu'

class MenuContainer extends Component {
  static getStores() {
    return [MenuStore]
  }

  static calculateState(prevState) {
    return {
      categories: MenuStore.categories
    }
  }

  render() {
    return <Menu categories={ this.state.categories } />
  }
}

const container = Container.create(MenuContainer)
export default container

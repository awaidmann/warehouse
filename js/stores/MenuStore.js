/* @flow */

import { Store } from 'flux/utils'

import AppDispatcher from '../dispatcher/AppDispatcher'
import Actions from '../constants/ActionConstants'

class MenuStore extends Store {
  constructor(dispatcher) {
    super(dispatcher)
    // TODO: Swap constructor for getInitialState()
    this.categories = []
    this.selected = ''

    // TODO: Remove
    this._emitMenuCategories()
  }

  __onDispatch(action: Action) {
    switch(action.type) {
    case Actions.LOAD_CATEGORIES:
      this.categories.push(action.category)
      return this.categories
    case Actions.SELECT_CATEGORY:
      this.selected = action.category
      return action.category
    }
  }

  // TODO: Remove
  _emitMenuCategories() {
    const cats = require('../constants/CategoryConstants').default
    for(const cat in cats) {
      this.__dispatcher.dispatch({ type: Actions.LOAD_CATEGORIES, category: cats[cat] })
    }
  }
}

const menuStore = new MenuStore(AppDispatcher)
export default menuStore

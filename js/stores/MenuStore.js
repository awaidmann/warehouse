import { Store } from 'flux/utils'

import AppDispatcher from '../dispatcher/AppDispatcher'
import Actions from '../constants/ActionConstants'

class MenuStore extends Store {
  constructor(dispatcher) {
    super(dispatcher)

    this.categories = []

    // TODO: Remove once we have actual services
    dispatcher.dispatch({ type: Actions.LOAD_CATEGORY, category: 'Inventory' })
    dispatcher.dispatch({ type: Actions.LOAD_CATEGORY, category: 'Inventory Classes' })
    dispatcher.dispatch({ type: Actions.LOAD_CATEGORY, category: 'Shipments' })
    dispatcher.dispatch({ type: Actions.LOAD_CATEGORY, category: 'Containers' })
  }

  __onDispatch(action) {
    switch(action.type) {
    case Actions.LOAD_CATEGORY:
      this.categories.push(action.category)
      return this.categories
    }
  }
}

const menuStore = new MenuStore(AppDispatcher)
export default menuStore

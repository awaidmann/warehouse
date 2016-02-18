import CategoryName from './CategoryConstants'
import AppDispatcher from '../src/dispatcher/AppDispatcher'

import { LoadAction, ActionType, MenuCategory } from '../lib/index'

export default function emitCategories() {
  const cats = Object.keys(CategoryName).map((cat) => {
    return new MenuCategory(cat, CategoryName[cat])
  })
  AppDispatcher.dispatch( new LoadAction(ActionType.LOAD_CATEGORIES, cats) )
}

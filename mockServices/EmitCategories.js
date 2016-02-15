import CategoryName from './CategoryConstants'
import AppDispatcher from '../src/dispatcher/AppDispatcher'

import MenuCategory from '../lib/define/MenuCategory'
import { LoadAction, ActionType } from '../lib/index'

export default function emitCategories() {
  const cats = Object.keys(CategoryName).map((cat) => {
    return new MenuCategory(CategoryName[cat])
  })
  AppDispatcher.dispatch( new LoadAction(ActionType.LOAD_CATEGORIES, cats) )
}

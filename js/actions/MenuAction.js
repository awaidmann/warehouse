import Actions from '../constants/ActionConstants'

export type MenuAction =
{
  type: Actions.SELECT_CATEGORY,
  category: string,
} |
{
  type: Actions.LOAD_CATEGORY,
  category: string,
}

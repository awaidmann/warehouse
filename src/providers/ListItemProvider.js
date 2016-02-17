/* @flow */
import React from 'react'
import { Record, List, KeyedIterable } from 'immutable'

import MUIListItem from 'material-ui/lib/lists/list-item';

const LIST_ROOT_KEY = 'ROOT'

export default class ListItemProvider<T: Record> {
  static buildHierarchy(listItems: List<T>): ?KeyedIterable<string, any> {
    function recBuild(recItems: List<T>, depth: number): ?KeyedIterable<string, any> {
      if (!recItems.isEmpty()){
        return recItems.groupBy( inventory => inventory.get('typePath').get(depth, LIST_ROOT_KEY) )
          .mapEntries( ([k, group]) => {
            if (k === LIST_ROOT_KEY) { return [k, group] }
            return [k, recBuild(group, depth + 1)] //Can we make this tail recursive? Maybe if recBuild accepts k and then returns [k, newGroup]?
          })
      }
    }

    if (!(listItems instanceof List)) {
      return KeyedIterable()
    }
    return recBuild(listItems, 0)
  }

  static buildListComponents(hierarchy: ?KeyedIterable<string, any>): Array<?ReactElement> {
    function recBuild(recHierarchy: ?KeyedIterable<string, any>, prevIndex: string): Array<?ReactElement> {
      if (recHierarchy) {
        const nested = recHierarchy.filter( (_, k) => k !== LIST_ROOT_KEY )
          .reduce( (reduced, group, key) => { return reduced.concat(recBuild(group, key)) }, [] )

        const root = recHierarchy.get(LIST_ROOT_KEY, List()).first()
        if (root && root instanceof Record) {
          return (<MUIListItem
              key={prevIndex}
              index={prevIndex}
              primaryText={root.get('title')}
              nestedItems={nested}
            />)
        } else {
          return nested
        }
      }
      return []
    }

    return recBuild(hierarchy, '')
  }
}

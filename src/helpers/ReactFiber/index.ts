import { ReactFiber } from '../../components/ContentEditor/ContentProxy/ContentEditorTextToolbar/Toolbar/interfaces'

export function getReactFiber(node: Node): ReactFiber | null {
  let reactFiber: ReactFiber | null = null

  for (const i in node) {
    if (i.startsWith('__reactFiber')) {
      //

      reactFiber = node[i as keyof Node] as ReactFiber

      break
    }
  }

  return reactFiber
}

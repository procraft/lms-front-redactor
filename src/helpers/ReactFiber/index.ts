import { RedactorComponentProps } from '../..'
import { ReactFiber } from '../../components/ContentEditor/ContentProxy/ContentEditorTextToolbar/Toolbar/interfaces'

/**
 * Получаем Реакт-ноду из HTML-ноды
 */
export function getReactFiber(node: Node): ReactFiber | null {
  let reactFiber: ReactFiber | null = null

  for (const i in node) {
    if (i.startsWith('__reactFiber')) {
      //

      reactFiber = node[i as keyof Node] as unknown as ReactFiber

      break
    }
  }

  return reactFiber
}

/**
 * Получаем объект редактор-компонента из HTML-ноды
 */
export function getRedactorComponentObjectFromHtmlNode(
  node: ChildNode
): RedactorComponentProps['object'] | undefined {
  if (!(node instanceof HTMLElement)) {
    return
  }

  const reactFiber = getReactFiber(node)

  if (reactFiber && reactFiber.return) {
    // Если компонент не доступен для редактирования, возвращаем его текущее состояние
    /**
     * Проверка на isContentEditable обязательна, так как сюда попадают и HTML-теги (компоненты).
     * То есть сейчас предполагается нередактируемые реакт-компоненты задавать с isContentEditable=false
     */
    if (node.isContentEditable === false) {
      if (reactFiber.return.pendingProps?.object) {
        return reactFiber.return.pendingProps?.object
      } else if (reactFiber.return.return?.pendingProps?.object) {
        /**
         * Здесь нет возможности из любой ноды реакт-компонента определить каким именно компонентом сформирован HTML.
         * Так как HTML-нода может быть обернута в другой компонент (например styled-component), то из нее мы не можем сразу
         * получить наш объект. Добавляем костыль - поиск объекта в родительском компоненте.
         */
        return reactFiber.return.return?.pendingProps?.object
      }

      return
    }
  }
}

import CSSTransform from '@prisma-cms/front-editor/dist/components/Tag/HtmlTag/CSSTransform'
import { RedactorComponentObject } from '../../../../../../RedactorComponent/interfaces'
import { FiberNode } from '../interfaces'

/**
 * Convert HTML Node to EditorComponentObject JSON
 */
export const nodeToEditorComponentObject = (
  // node: NonNullable<ElementWithReactComponent | Text | ChildNode>,
  node: NonNullable<Text | ChildNode>,
  object?: RedactorComponentObject
): RedactorComponentObject | undefined => {
  const content = object || {
    name: 'HtmlTag',
    component: 'HtmlTag',
    props: {},
    components: [],
  }

  // eslint-disable-next-line no-constant-condition
  // if (1 === 1) {
  //   return
  // }

  /**
   * Если это реакт-нода, то возвращаем его состояние
   */
  if (node instanceof HTMLElement) {
    // TODO Здесь надо реализовать логику вычленения данных реакт-компонента

    // console.log('nodeToEditorComponentObject node', node)

    /**
     * Пытаемся получить данные реакт-компонента
     */
    const keys = Object.keys(node)

    const reactFiberKey = keys.find((n) =>
      n.startsWith('__reactFiber$')
    ) as keyof Element
    const reactFiber = node[reactFiberKey] as FiberNode

    /**
     * Если это реакт-компонент, то возвращаем его свойства
     */
    if (reactFiber && reactFiber.return) {
      // !(reactFiber.return.elementType === HtmlTag)

      // console.log('nodeToEditorComponentObject reactFiber', reactFiber)

      // Если компонент не доступен для редактирования, возвращаем его текущее состояние
      /**
       * Проверка на isContentEditable обязательна, так как сюда попадают и HTML-теги (компоненты).
       * То есть сейчас предполагается нередактируемые рекат-компоненты задавать с isContentEditable=false
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

    /**
     * Если это реакт-компонент, то возвращаем его свойства
     */
    // if (reactFiber && reactFiber.lastEffect) {
    //   // !(reactFiber.return.elementType === HtmlTag)

    //   // console.log('nodeToEditorComponentObject reactFiber', reactFiber)

    //   // Если компонент не доступен для редактирования, возвращаем его текущее состояние
    //   if (node.isContentEditable === false) {
    //     if (reactFiber.lastEffect.pendingProps.object) {
    //       return reactFiber.lastEffect.pendingProps.object
    //     }

    //     return
    //   }
    // }

    // return

    // const { reactComponent, editorComponentObject } = node

    // if (editorComponentObject) {
    //   return editorComponentObject
    // }

    // if (reactComponent && !(reactComponent instanceof HtmlTag)) {
    //   const component = reactComponent.getObjectWithMutations()

    //   return component
    // }

    // TODO Временный хак, чтобы
    if (node.getAttribute('data-redactor--fake-wrapper') === 'true') {
      if (node.firstChild) {
        return nodeToEditorComponentObject(node.firstChild, object)
      }

      return
    }
  }

  const nodes = node.childNodes

  let NodeName = node.nodeName.toLowerCase() as
    | keyof JSX.IntrinsicElements
    | '#text'
    | '#comment'
    | undefined

  if (NodeName === '#text') {
    NodeName = undefined
  }

  // TODO Надо проработать обработку комментариев
  if (NodeName === '#comment') {
    return undefined
  }

  if (node.nodeType === Node.TEXT_NODE) {
    // https://stackoverflow.com/questions/12754256/removing-invalid-characters-in-javascript
    content.props.text = node.textContent?.replace(/\uFFFD/g, '') || ''
  } else if (node instanceof Element && node.nodeType === Node.ELEMENT_NODE) {
    const attributes = node.attributes

    node.getAttributeNames().map((name) => {
      // let value = attributes[name].value;

      let value: string | Record<string, unknown> | undefined =
        attributes.getNamedItem(name)?.value ?? undefined

      /**
       * Пропускаем технические атрибуты редактора
       */
      if (name.startsWith('data-redactor--')) {
        return null
      }

      switch (name) {
        // case "id":
        // case "src":
        // case "href":
        //   // case "editable":

        //   break;

        case 'props':
        case 'object':
        case 'data':
          return null

        case 'contenteditable':
          // name = "contentEditable";
          // break;

          return null

        case 'class':
          name = 'className'

          break

        case 'staticcontext':
          name = 'staticContext'

          break

        case 'style':
          try {
            // console.log("CSSTransform style", value);

            value = value ? CSSTransform(value) : undefined

            // console.log("CSSTransform new style", value);
          } catch (error) {
            console.error(error)
            value = undefined
          }

          break

        default:
      }

      content &&
        Object.assign(content.props, {
          [name]: value,
        })

      return null
    })

    const components: RedactorComponentObject['components'] = []

    nodes.forEach((node) => {
      const component = nodeToEditorComponentObject(node)

      component && components.push(component)
    })

    Object.assign(content, {
      components,
    })
  }

  if (content) {
    content.props.tag = NodeName
  }

  return content
}

/**
 * Конвертируем содержимое HTML-ноды в компоненты
 * @deprecated use nodeToEditorComponentObject instead
 */
export const nodeChildsToEditorComponentObjectComponents = (node: Node) => {
  const nodes = node.childNodes

  const components: RedactorComponentObject['components'] = []

  const content: Partial<RedactorComponentObject> = {}

  nodes.forEach((n) => {
    const component = nodeToEditorComponentObject(n)

    component && components.push(component)
  })

  Object.assign(content, {
    components,
  })

  return content
}

export default nodeToEditorComponentObject

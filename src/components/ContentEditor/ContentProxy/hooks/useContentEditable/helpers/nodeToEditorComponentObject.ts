import CSSTransform from '@prisma-cms/front-editor/dist/components/Tag/HtmlTag/CSSTransform'
import {
  BOOLEAN,
  getPropertyInfoByAttributeName,
} from './react-utils/DOMProperty'
import { RedactorComponentObject } from '../../../../../../RedactorComponent/interfaces'
import { getRedactorComponentObjectFromHtmlNode } from '../../../../../../helpers/ReactFiber'
import { ReactComponentTagName } from '../../../../HTMLEditor/interfaces'

/**
 * Convert HTML Node to EditorComponentObject JSON
 */
export const nodeToEditorComponentObject = (
  node: NonNullable<Text | ChildNode>,
  object?: RedactorComponentObject
): RedactorComponentObject | undefined => {
  const content = object || {
    name: 'HtmlTag',
    component: 'HtmlTag',
    props: {},
    components: [],
  }

  // console.log('nodeToEditorComponentObject node', node)
  // console.log(
  //   'nodeToEditorComponentObject node instanceof HTMLElement',
  //   node instanceof HTMLElement
  // )

  /**
   * Если это реакт-нода, то возвращаем его состояние
   */
  if (node instanceof HTMLElement) {
    // TODO Здесь надо реализовать логику вычленения данных реакт-компонента

    // const reactFiber = getReactFiber(node)

    /**
     * Если это реакт-компонент, то возвращаем его свойства
     */
    // if (reactFiber && reactFiber.return) {

    //   // Если компонент не доступен для редактирования, возвращаем его текущее состояние
    //   /**
    //    * Проверка на isContentEditable обязательна, так как сюда попадают и HTML-теги (компоненты).
    //    * То есть сейчас предполагается нередактируемые реакт-компоненты задавать с isContentEditable=false
    //    */
    //   if (node.isContentEditable === false) {
    //     if (reactFiber.return.pendingProps?.object) {
    //       return reactFiber.return.pendingProps?.object
    //     } else if (reactFiber.return.return?.pendingProps?.object) {
    //       /**
    //        * Здесь нет возможности из любой ноды реакт-компонента определить каким именно компонентом сформирован HTML.
    //        * Так как HTML-нода может быть обернута в другой компонент (например styled-component), то из нее мы не можем сразу
    //        * получить наш объект. Добавляем костыль - поиск объекта в родительском компоненте.
    //        */
    //       return reactFiber.return.return?.pendingProps?.object
    //     }

    //     return
    //   }
    // }

    const redactorObject = getRedactorComponentObjectFromHtmlNode(node)

    if (redactorObject) {
      return redactorObject
    }

    // TODO Временный хак, чтобы пропускать технические ноды
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

  // console.log('nodeToEditorComponentObject NodeName', NodeName)

  /**
   * Реакт-компоненты
   */
  if (NodeName === `${ReactComponentTagName}` && node instanceof HTMLElement) {
    const object: RedactorComponentObject = {
      name: 'HtmlTag',
      component: 'HtmlTag',
      props: {},
      components: [],
    }

    node.getAttributeNames().forEach((name) => {
      let value = node.attributes.getNamedItem(name)?.value

      if (value !== undefined) {
        try {
          switch (name) {
            case 'components':
            case 'props':
              value = JSON.parse(value)
              break
          }
          // @ts-expect-error
          object[name as keyof RedactorComponentObject] = value
          // object[name as keyof RedactorComponentObject] = JSON.parse(value)
        } catch (error) {
          console.error(error)
        }
      }
    })

    return object
  }

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

    node.getAttributeNames().forEach((name) => {
      let value: string | Record<string, unknown> | boolean | undefined =
        attributes.getNamedItem(name)?.value ?? undefined

      /**
       * Пропускаем технические атрибуты редактора
       */
      if (name.startsWith('data-redactor--')) {
        return null
      }

      switch (name) {
        case 'props':
        case 'object':
        case 'data':
          return null

        case 'contenteditable':
          return null

        case 'srcset':
          name = 'srcSet'
          break

        case 'style':
          try {
            value = value ? CSSTransform(value) : undefined
          } catch (error) {
            console.error(error)
            value = undefined
          }
          break

        default: {
          const propertyInfo = getPropertyInfoByAttributeName(name)

          if (propertyInfo) {
            name = propertyInfo.propertyName

            // TODO handle other attr types
            switch (propertyInfo.type) {
              case BOOLEAN:
                /**
                 * Если это логический атрибут, задаем значение по-умолчанию true.
                 * Это связано с тем, что HTML сокращенные варианты атрибутов расценивает как пустую строку,
                 * то есть, к примеру, autoplay будет расценено как autoplay=''
                 * Но в реакт если передавать autoplay='', будет расценено как false,
                 * так как у него этот атрибут считается булевым и надо передавать true или false
                 */

                /**
                 * Некоторые атрибуты требуют значения по названию
                 */
                if (value === '' && propertyInfo.mustUseProperty) {
                  value = propertyInfo.propertyName
                }

                if (value === '' && propertyInfo.acceptsBooleans) {
                  value = true
                }

                break
            }
          }
        }
      }

      content &&
        Object.assign(content.props, {
          [name]: value,
        })
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
    // switch (NodeName) {
    //   // case 'head':
    //   //   content.component = 'Head'

    //   //   // console.log('Head content', content)

    //   //   break
    //   default:
    content.props.tag = NodeName
    // }
  }

  return content
}

/**
 * Конвертируем содержимое HTML-ноды в компоненты
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

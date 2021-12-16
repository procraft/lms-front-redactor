import { getRedactorComponentObjectFromHtmlNode } from '../../../../../helpers/ReactFiber'

/**
 * Рекурсивное клонирование ноды с пользовательскими свойствами
 * с преобразованием Реакт-компонентов в кастомные теги
 */
function nodeDeepCloneWithReactComponents(node: ChildNode) {
  const redactorObject = getRedactorComponentObjectFromHtmlNode(node)

  // redactorObject &&
  //   console.log(
  //     'nodeDeepCloneWithReactComponents redactorObject',
  //     redactorObject,
  //     node
  //   )

  /**
   * Если это редактор-компонент, создаем кастомную ноду.
   */
  if (redactorObject) {
    const { component } = redactorObject

    switch (component) {
      case 'Section':
      case 'HtmlTag':
        break

      default: {
        const redactorTag = document.createElement(
          `redactorcomponent__${component}`
        )

        Object.keys(redactorObject).forEach((name) => {
          const attrValue = redactorObject[name as keyof typeof redactorObject]

          // console.log('attrValue', attrValue)

          if (attrValue !== undefined) {
            const attr = document.createAttribute(name)
            attr.value = JSON.stringify(attrValue)

            redactorTag.attributes.setNamedItem(attr)
          }
        })

        return redactorTag
      }
    }
  }

  /**
   * Делаем клон узла
   */
  const clone = node.cloneNode()

  /**
   * Копируем все пользовательские свойства
   */
  // Object.assign(clone, { ...node })

  /**
   * Если есть дочерние элементы, клонируем и их
   */
  if (node.childNodes.length) {
    node.childNodes.forEach((child) => {
      const childClone = nodeDeepCloneWithReactComponents(child)

      clone.appendChild(childClone)
    })
  }

  /**
   * Чистим атрибуты
   */

  if (clone instanceof HTMLElement) {
    clone.getAttributeNames().forEach((name) => {
      // console.log('attribute name', name)

      const value: string | Record<string, unknown> | boolean | undefined =
        clone.attributes.getNamedItem(name)?.value ?? undefined

      value

      /**
       * Пропускаем технические атрибуты редактора
       */
      // if (name.startsWith('data-redactor--')) {
      //   return null
      // }

      switch (name) {
        case 'contenteditable':
          clone.attributes.removeNamedItem(name)
          break

        case 'class':
          /**
           * Надо удалять все сгенерированные стили
           */
          break

        default:
        // clone.attributes.removeNamedItem(name);
      }
    })
  }

  return clone
}

/**
 * Преобразуем HTML-узел в HTML-текст.
 * Внутренние реакт-компоненты (которые не HtmlTag) должны стать спецтегами.
 * Так же надо вычистить технические стили и атрибуты.
 */
export function NodeToHtml(element: HTMLElement) {
  // element;

  /**
   * Делаем клон узла с преобразованием компонентов
   */
  const clone = nodeDeepCloneWithReactComponents(element)

  // console.log('NodeToHtml clone', clone)

  if (!(clone instanceof HTMLElement)) {
    return ''
  }

  const html = clone.outerHTML.replace(/ data-redactor--.+?=".*?"+/g, '')

  // const html = element.outerHTML.replace(/ data-redactor--.+?=".*?"+/g, '')

  // const html = `<sdfsdfsdf>wefwefwef</sdfsdfsdf>`;

  return html
}

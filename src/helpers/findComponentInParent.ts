import { RedactorComponentObject } from '../RedactorComponent/interfaces'

export function findComponentInParent(
  components: RedactorComponentObject[],
  component: RedactorComponentObject
) {
  let componentIndex = components.indexOf(component)

  // TODO Сейчас это не совсем корректная логика, так как если у одного родителя будет сразу несколько
  // прямых потомков с одним id, то будет удален первый элемент
  // По идее надо перенести в сам сохраненный блок логику поиска своего элемента в родителе
  /**
   * Если у компонента есть id, то ищем по нему
   */
  if (componentIndex === -1 && component.id) {
    componentIndex = components.findIndex((n) => n.id === component.id)
  }

  if (componentIndex === -1) {
    console.error(
      'Не был найден текущий компонент в массиве компонентов',
      'components',
      components,
      'component',
      component
    )
    return
  }

  return componentIndex
}

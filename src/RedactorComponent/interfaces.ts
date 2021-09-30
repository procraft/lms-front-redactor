import { EditorComponentObject } from '@prisma-cms/front-editor/dist'
import React from 'react'
import { RedactorComponentWrapperProps } from '../hooks/useRedactorComponentInit/RedactorComponentWrapper/interfaces'

export interface LandingTemplateFragment {
  component: string
  description?: string | null
  foo?: boolean | null
  name: string
}

export type RedactorComponentObject<P = {}> = LandingTemplateFragment & {
  components: RedactorComponentObject<P>[]
  props: EditorComponentObject<P>['props']
  id?: string
  uri?: string | null
}

export type RedactorComponentProps<P = {}> = {
  object: Readonly<RedactorComponentObject<P>>

  // TODO Надо будет перепроверить логику с inEditMode.
  // Сейчас в MainPage (и других) передаются вложенные редактор-компоненты,
  // И если указать inEditMode={false}, то они не редактируются. А не указывать вообще -
  // Можно потом поймать логические ошибки.
  /**
   * В режиме редактирования фронт-редактор или нет.
   */
  inEditMode: boolean

  // TODO: надо добавить признак операции, например add_child, remove_child и т.п.
  /**
   * Обновление объекта.
   * Важно: первый параметр - исходный объект, который никак не должен быть модифицирован.
   * Второй объект - новые данные оъекта.
   * Смысл в том, чтобы родитель, получив данные объектов, мог по исходному объекту найти его
   * в массиве своих дочерних.
   */
  updateObject: (
    current: RedactorComponentProps['object'],
    data: Partial<RedactorComponentObject>
  ) => void
  // updateObject: (current: RedactorComponentProps["object"], data: Partial<EditorComponentObject>) => void

  wrapperContainer: RedactorComponentWrapperProps['container']

  parent?: RedactorComponentWrapperProps['parent']
  updateParent?: RedactorComponentWrapperProps['updateParent']
}

export type RedactorComponent<
  P extends RedactorComponentProps = RedactorComponentProps
> = React.FC<P>

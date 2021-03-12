import { RedactorComponentObject, RedactorComponentProps } from "../../../../../RedactorComponent/interfaces"

export type useContentEditableProps = {
  element: HTMLElement | null
  active: boolean
  object: RedactorComponentProps['object']
  // updateObject: RedactorComponentProps['updateObject']
  updateObject: (components: RedactorComponentObject['components']) => void
}

export type FiberNode = {
  return?: {
    elementType: Function

    pendingProps: RedactorComponentProps
  }
}

import { RedactorObjectTemplate } from '../../Context'
import { RedactorComponentWrapperProps } from '../useRedactorComponentInit/RedactorComponentWrapper/interfaces'

export enum InsertPlace {
  Child,
  Before,
  After,
}

export type useAddComponentProps = {
  place: InsertPlace
  object: RedactorComponentWrapperProps['object']
  componentData: RedactorObjectTemplate | null
  updateObject: RedactorComponentWrapperProps['updateObject']

  parent: RedactorComponentWrapperProps['parent']
  updateParent: RedactorComponentWrapperProps['updateParent']
}

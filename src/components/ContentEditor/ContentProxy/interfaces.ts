import { RedactorComponentProps } from '../../../RedactorComponent/interfaces'
import { useContentEditableProps } from './hooks/useContentEditable/interfaces'

export type EditableContentProxyProps = Omit<
  useContentEditableProps,
  'element' | 'updateObject'
> & {
  updateObject: RedactorComponentProps['updateObject']
}

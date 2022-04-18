import { RedactorComponent, RedactorComponentProps } from '../../..'
import { Scalars } from '../../../modules/gql/generated/types'

export type SavedBlockProps = Omit<
  RedactorComponentProps,
  'isDirty' | 'updateTemplate'
> & {
  id: Scalars['ID']
  Component: RedactorComponent
}

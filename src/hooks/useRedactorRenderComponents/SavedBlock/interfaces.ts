import { RedactorComponent, RedactorComponentProps } from '../../..'
import { Scalars } from '../../../modules/gql/generated/types'

export type SavedBlockProps = RedactorComponentProps & {
  id: Scalars['ID']
  Component: RedactorComponent
}

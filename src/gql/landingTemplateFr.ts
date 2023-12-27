import * as Types from '../modules/gql/generated/types'

import { gql } from '@apollo/client'
export type LandingTemplateFrFragment = {
  __typename?: 'LandingTemplate__Fragment'
  id: string
  name: string
  description?: Types.Maybe<string>
  uri?: Types.Maybe<string>
  component: string
  components: any
  props: any
}

export const LandingTemplateFrFragmentDoc = gql`
  fragment landingTemplateFr on LandingTemplate__Fragment {
    id
    name
    description
    uri
    component
    components
    props
    favicon {url}
  }
`

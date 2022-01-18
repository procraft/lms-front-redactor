import * as Types from '../modules/gql/generated/types'
import { LandingTemplateFrFragment } from './landingTemplateFr'
import { gql } from '@apollo/client'
import { LandingTemplateFrFragmentDoc } from './landingTemplateFr'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type TemplateQueryVariables = Types.Exact<{
  where: Types.TemplateWhereUniqueInput
}>

export type TemplateQuery = {
  __typename?: 'Query'
  template?: Types.Maybe<
    { __typename?: 'LandingTemplate__Fragment' } & LandingTemplateFrFragment
  >
}

export const TemplateDocument = gql`
  query template($where: TemplateWhereUniqueInput!) {
    template(where: $where) {
      ...landingTemplateFr
    }
  }
  ${LandingTemplateFrFragmentDoc}
`

/**
 * __useTemplateQuery__
 *
 * To run a query within a React component, call `useTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTemplateQuery(
  baseOptions: Apollo.QueryHookOptions<TemplateQuery, TemplateQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TemplateQuery, TemplateQueryVariables>(
    TemplateDocument,
    options
  )
}
export function useTemplateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TemplateQuery,
    TemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TemplateQuery, TemplateQueryVariables>(
    TemplateDocument,
    options
  )
}
export type TemplateQueryHookResult = ReturnType<typeof useTemplateQuery>
export type TemplateLazyQueryHookResult = ReturnType<
  typeof useTemplateLazyQuery
>
export type TemplateQueryResult = Apollo.QueryResult<
  TemplateQuery,
  TemplateQueryVariables
>

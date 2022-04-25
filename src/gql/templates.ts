/* eslint-disable */

/**
 * ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО
 * Команда для генерирования этого файла: "yarn generate:types"
 */

import * as Types from './types'

import { LandingTemplateFrFragment } from './landingTemplateFr'
import { gql } from '@apollo/client'
import { LandingTemplateFrFragmentDoc } from './landingTemplateFr'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type TemplatesQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.TemplateWhereInput>
}>

export type TemplatesQuery = {
  __typename?: 'Query'
  templates: Array<
    { __typename?: 'LandingTemplate__Fragment' } & LandingTemplateFrFragment
  >
}

export const TemplatesDocument = gql`
  query templates($where: TemplateWhereInput) {
    templates(where: $where) {
      ...landingTemplateFr
    }
  }
  ${LandingTemplateFrFragmentDoc}
`

/**
 * __useTemplatesQuery__
 *
 * To run a query within a React component, call `useTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplatesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTemplatesQuery(
  baseOptions?: Apollo.QueryHookOptions<TemplatesQuery, TemplatesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TemplatesQuery, TemplatesQueryVariables>(
    TemplatesDocument,
    options
  )
}
export function useTemplatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TemplatesQuery,
    TemplatesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TemplatesQuery, TemplatesQueryVariables>(
    TemplatesDocument,
    options
  )
}
export type TemplatesQueryHookResult = ReturnType<typeof useTemplatesQuery>
export type TemplatesLazyQueryHookResult = ReturnType<
  typeof useTemplatesLazyQuery
>
export type TemplatesQueryResult = Apollo.QueryResult<
  TemplatesQuery,
  TemplatesQueryVariables
>

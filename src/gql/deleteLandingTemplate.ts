/* eslint-disable */

/**
 * ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО
 * Команда для генерирования этого файла: "yarn generate:types"
 */

import * as Types from './types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type DeleteLandingTemplateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type DeleteLandingTemplateMutation = {
  __typename?: 'Mutation'
  deleteLandingTemplate: boolean
}

export const DeleteLandingTemplateDocument = gql`
  mutation deleteLandingTemplate($id: ID!) {
    deleteLandingTemplate: deleteLandingTemplateCustom(id: $id)
  }
`
export type DeleteLandingTemplateMutationFn = Apollo.MutationFunction<
  DeleteLandingTemplateMutation,
  DeleteLandingTemplateMutationVariables
>

/**
 * __useDeleteLandingTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteLandingTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLandingTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLandingTemplateMutation, { data, loading, error }] = useDeleteLandingTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLandingTemplateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteLandingTemplateMutation,
    DeleteLandingTemplateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteLandingTemplateMutation,
    DeleteLandingTemplateMutationVariables
  >(DeleteLandingTemplateDocument, options)
}
export type DeleteLandingTemplateMutationHookResult = ReturnType<
  typeof useDeleteLandingTemplateMutation
>
export type DeleteLandingTemplateMutationResult =
  Apollo.MutationResult<DeleteLandingTemplateMutation>
export type DeleteLandingTemplateMutationOptions = Apollo.BaseMutationOptions<
  DeleteLandingTemplateMutation,
  DeleteLandingTemplateMutationVariables
>

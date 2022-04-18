/* eslint-disable */

/**
 * ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО
 * Команда для генерирования этого файла: "yarn generate:types"
 */

// @ts-ignore

import * as Types from './types'

import { LandingTemplateFrFragment } from './landingTemplateFr'
import { gql } from '@apollo/client'
import { LandingTemplateFrFragmentDoc } from './landingTemplateFr'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type UpdateLandingTemplateMutationVariables = Types.Exact<{
  input: Types.UpdateLandingTemplateInput
}>

export type UpdateLandingTemplateMutation = {
  __typename?: 'Mutation'
  updateLandingTemplate?: Types.Maybe<{
    __typename?: 'LandintTemplatePayload'
    landingTemplate: {
      __typename?: 'LandingTemplate__Fragment'
    } & LandingTemplateFrFragment
  }>
}

export const UpdateLandingTemplateDocument = gql`
  mutation updateLandingTemplate($input: UpdateLandingTemplateInput!) {
    updateLandingTemplate(input: $input) {
      landingTemplate {
        ...landingTemplateFr
      }
    }
  }
  ${LandingTemplateFrFragmentDoc}
`
export type UpdateLandingTemplateMutationFn = Apollo.MutationFunction<
  UpdateLandingTemplateMutation,
  UpdateLandingTemplateMutationVariables
>

/**
 * __useUpdateLandingTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateLandingTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLandingTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLandingTemplateMutation, { data, loading, error }] = useUpdateLandingTemplateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLandingTemplateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLandingTemplateMutation,
    UpdateLandingTemplateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateLandingTemplateMutation,
    UpdateLandingTemplateMutationVariables
  >(UpdateLandingTemplateDocument, options)
}
export type UpdateLandingTemplateMutationHookResult = ReturnType<
  typeof useUpdateLandingTemplateMutation
>
export type UpdateLandingTemplateMutationResult =
  Apollo.MutationResult<UpdateLandingTemplateMutation>
export type UpdateLandingTemplateMutationOptions = Apollo.BaseMutationOptions<
  UpdateLandingTemplateMutation,
  UpdateLandingTemplateMutationVariables
>

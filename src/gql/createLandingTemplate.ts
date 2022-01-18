import * as Types from '../modules/gql/generated/types'

import { LandingTemplateFrFragment } from './landingTemplateFr'
import { gql } from '@apollo/client'
import { LandingTemplateFrFragmentDoc } from './landingTemplateFr'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type CreateLandingTemplateMutationVariables = Types.Exact<{
  input: Types.CreateLandingTemplateInput
}>

export type CreateLandingTemplateMutation = {
  __typename?: 'Mutation'
  createLandingTemplate?: Types.Maybe<{
    __typename?: 'LandintTemplatePayload'
    landingTemplate: {
      __typename?: 'LandingTemplate__Fragment'
    } & LandingTemplateFrFragment
  }>
}

export const CreateLandingTemplateDocument = gql`
  mutation createLandingTemplate($input: CreateLandingTemplateInput!) {
    createLandingTemplate(input: $input) {
      landingTemplate {
        ...landingTemplateFr
      }
    }
  }
  ${LandingTemplateFrFragmentDoc}
`
export type CreateLandingTemplateMutationFn = Apollo.MutationFunction<
  CreateLandingTemplateMutation,
  CreateLandingTemplateMutationVariables
>

/**
 * __useCreateLandingTemplateMutation__
 *
 * To run a mutation, you first call `useCreateLandingTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLandingTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLandingTemplateMutation, { data, loading, error }] = useCreateLandingTemplateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLandingTemplateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLandingTemplateMutation,
    CreateLandingTemplateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateLandingTemplateMutation,
    CreateLandingTemplateMutationVariables
  >(CreateLandingTemplateDocument, options)
}
export type CreateLandingTemplateMutationHookResult = ReturnType<
  typeof useCreateLandingTemplateMutation
>
export type CreateLandingTemplateMutationResult =
  Apollo.MutationResult<CreateLandingTemplateMutation>
export type CreateLandingTemplateMutationOptions = Apollo.BaseMutationOptions<
  CreateLandingTemplateMutation,
  CreateLandingTemplateMutationVariables
>

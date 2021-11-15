import styled, { css } from 'styled-components'

export const EditableContentProxyStyled = styled.div<{ inEditMode: boolean }>`
  ${({ inEditMode }) => {
    if (inEditMode) {
      return css`
        min-height: 1rem;
        outline: none;
      `
    }
  }}
`

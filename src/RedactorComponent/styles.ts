import styled, { css } from 'styled-components'

type RedactorComponentStyledProps = {
  inEditMode: boolean
}

export const RedactorComponentStyled = styled.div<RedactorComponentStyledProps>`
  ${({ inEditMode }) => {
    if (inEditMode) {
      return css`
        min-height: 20px;
        padding: 10px;
      `
    }
  }}
`

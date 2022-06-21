import styled from 'styled-components'

export const RedactorComponentWrapperAddComponentButtonStyled = styled.div`
  & .vidget {
    background: #2563eb;
  }
  /* 
    Компонентам первого уровня добавляем бордер, чтобы их было видно.
   */
  > [data-redactor--component='true'] {
    border-color: lightgrey;
  }
`

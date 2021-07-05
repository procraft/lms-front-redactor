import styled from 'styled-components'

export const AddBlockModalStyled = styled.div`
  margin-top: 20px;

  /* 
    Компонентам первого уровня добавляем бордер, чтобы их было видно.
   */
  > [data-redactor--component='true'] {
    border-color: lightgrey;
  }
`

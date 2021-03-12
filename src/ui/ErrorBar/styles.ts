import styled from 'styled-components'

export const ErrorBarStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.frontRedactor.colors.colorYellow};
  z-index: 2000;
`

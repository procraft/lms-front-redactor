import styled from 'styled-components'

export const RedactorComponentWrapperStyled = styled.div`
  height: 100%;
  white-space: nowrap;

  .buttons {
    position: absolute;
    bottom: 100%;
    right: 0;

    > * {
      margin: 0 2px;
    }
  }

  button {
    pointer-events: all;
    cursor: pointer;
  }
`

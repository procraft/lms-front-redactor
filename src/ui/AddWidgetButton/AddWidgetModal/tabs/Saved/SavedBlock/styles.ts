import styled from 'styled-components'
import { ButtonStyled } from '@procraft/ui/dist/Button/styles'

export const SavedBlockStyled = styled.div`
  /* transform: scale(0.5); */

  position: relative;

  > ${ButtonStyled} {
    &.addComponent {
      > * {
        pointer-events: none;
      }
    }
  }

  .toolbar {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    ${ButtonStyled} {
      font-size: 14px;
    }
  }
`

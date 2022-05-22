import styled from 'styled-components'
import { ButtonStyled } from '@procraft/ui/dist/Button/styles'

export const SavedBlockButtonStyled = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  cursor: pointer;
  max-height: 25vh;

  > * {
    pointer-events: none;
  }
`

export const SavedBlockStyled = styled.div`
  position: relative;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;

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

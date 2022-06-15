import styled from 'styled-components'
import { Modal2 } from '../../Modal2'
import { Modal2ContentStyled } from '../../Modal2/styles'

export const AddWidgetModalStyled = styled(Modal2)`
  width: auto;

  ${Modal2ContentStyled} {
    
    & .btn {
      width: 50%;

      &.active {
        background-color: #3B82F6!important;
        color: #ffffff!important;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    & .vidgets {
      display: flex;
      flex-direction: column;
      
      & button {
        display: flex;
        align-items: center;
      }
    }
  }
`

export const AddWidgetModalButtonStyled = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  padding: 8px 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  background-color: transparent;

  &:hover {
    background-color: rgba(59, 130,	246, .2)
  }

  & svg {
    margin-right: 8px;
  }
`

import styled from 'styled-components'
import { Modal2 } from '../../Modal2'
import { Modal2ContentStyled } from '../../Modal2/styles'

export const AddWidgetModalStyled = styled(Modal2)`
  width: auto;

  ${Modal2ContentStyled} {
    & .btn {
      width: 50%;

      &.active {
        background-color: #3b82f6 !important;
        color: #ffffff !important;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    & .vidgets {
      display: flex;
      flex-direction: column;
      color: #000000;

      & button {
        display: flex;
        align-items: center;
      }

      & .show-more {
        min-height: unset;
        min-width: unset;
        margin: 0 auto;
        padding: 4px 8px;
        border: 1px solid #3b82f6;
        border-radius: 16px;

        & svg {
          margin-right: 4px;
        }

        $.hide {
          display: none;
        }
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
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  background-color: transparent;

  &:hover {
    background-color: rgba(59, 130, 246, 0.2);
  }

  & svg {
    margin-right: 8px;
  }
`

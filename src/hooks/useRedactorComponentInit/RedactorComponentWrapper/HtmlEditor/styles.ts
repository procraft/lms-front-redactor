import styled from 'styled-components'
import { Modal2 } from '../../../../../src/ui/Modal2'

export const ContentEditorStyled = styled(Modal2)`
    width: 800px;
    height: 500px !important;
    left: 20%;
    display: flex;
    flex-direction: column;
    position: relative;

    & .showCodeEditor {
      position: absolute;
      bottom: 32px;
      right: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 80px;
      height: 80px;
      background: #3B82F6;
      box-shadow: 0px 4px 16px rgba(59, 130, 246, 0.24);
      border-radius: 8px;
      color: #ffffff;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 120%;
      & svg {
        margin-bottom: 4px;
      }
    }
  }
`

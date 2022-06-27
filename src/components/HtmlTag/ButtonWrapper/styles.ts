import styled from 'styled-components'
import { Modal2 } from '../../../ui/Modal2'

export const ButtonWrapperModalStyled = styled(Modal2)`
  max-width: 340px;
  width: 100%;
  overflow: visible !important;

  & div {
    overflow: visible !important;
  }

  .image-block {
    img {
      max-width: 100%;
    }
  }

  & .btn-width {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    & label {
      color: #1e293b;
      transform: translate(0px, 4px) scale(1);
    }

    & div {
      margin-top: 24px;
    }

    & div.btn-input {
      margin-top: 0;
    }

    & input {
      border-width: 1px;
      padding: 8px;

      &::placeholder {
        color: #94a3b8;
      }
    }

    & .btn-input {
      width: 47%;
    }
  }

  & .btn-colors {
    display: flex;
    justify-content: space-between;
    position: relative;

    & .color-input {
      width: 45%;
      position: relative;

      & .color-block {
        height: 32px;
        width: 100%;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        cursor: pointer;
      }

      & .color-block-picker {
        margin: 0 4px 4px;
      }
    }
  }
`

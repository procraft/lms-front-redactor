import styled from 'styled-components'
import { Modal2 } from '../../../ui/Modal2'

export const ButtonWrapperModalStyled = styled(Modal2)`
  max-width: 320px;
  width: 100%;

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
      color: #1E293B;
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
        color: #94A3B8;
      }
    }

    & .btn-input {
      width: 45%;
    }
  }

  & .btn-colors {
    display: flex;
    justify-content: space-between;
    & .color-input {
      width: 45%;
    }
  }
`

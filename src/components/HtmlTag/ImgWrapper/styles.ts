import styled from 'styled-components'
import { Modal2 } from '../../../ui/Modal2'

export const ImgWrapperModalStyled = styled(Modal2)`
  max-width: 320px;
  width: 100%;

  .image-block {
    margin-bottom: 8px;
    img {
      max-width: 100%;
    }
  }

  & .image-inputs {
    display: flex;
    justify-content: space-between;
    color: #1e293b;
    margin-bottom: 16px;
    &:last-child {
      margin-botton: 0 !important;
    }

    & .img-input {
      width: 45%;
      & label {
        color: #1e293b;
        transform: translate(0px, 4px) scale(1);
      }
      & div {
        margin-top: 24px;
      }

      & input {
        color: #1e293b;
        border-width: 1px;
        padding: 8px;

        &::placeholder {
          color: #94a3b8;
        }
      }
    }
  }
`

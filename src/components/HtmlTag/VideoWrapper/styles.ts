import styled from 'styled-components'
import { Modal2 } from '../../../ui/Modal2'

export const VideoWrapperModalStyled = styled(Modal2)`
  max-width: 320px;
  width: 100%;
  & .video-inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    &:last-child {
      margin-botton: 0!important;
    }

    & .video-input {
      width: 45%;
      & label {
        color: #1E293B;
        transform: translate(0px, 4px) scale(1);
      }
      & div {
        margin-top: 24px;
      }

      & input {
        border-width: 1px;
        padding: 8px;

        &::placeholder {
          color: #94A3B8;
        }
      }
    }
  }
`

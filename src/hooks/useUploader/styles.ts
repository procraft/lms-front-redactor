import styled from 'styled-components'

import { IconButton } from '@procraft/ui/dist/IconButton'

export const UploaderInputStyled = styled.input`
  /**
    На конечном сайте могут быть переопределены стили для [type="file"]
  */

  &[type='file'] {
    display: none;
  }
`

export const UploaderStyled = styled(IconButton)`
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(148, 163, 184, 0.24);
  padding: 8px;
  height: auto;
  width: 100%;
  margin-bottom: 16px;

  & .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed #cbd5e1;
    border-radius: 4px;
    width: 100%;
    padding: 8px 0;

    & svg {
      margin-bottom: 4px;
    }

    & p {
      margin-bottom: 0;
      text-transform: none;
      color: #475569;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 120%;
    }
  }
`

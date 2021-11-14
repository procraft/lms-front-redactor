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

export const UploaderStyled = styled(IconButton)``

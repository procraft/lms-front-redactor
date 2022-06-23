import styled from 'styled-components'
import { Modal2 } from '../../../../ui/Modal2'

export const AddBlockModal2Styled = styled(Modal2)`
  background-color: white;
  & h1 {
    margin 16px;
  }

  > hr {
    border: none;
  }
`

export const AddBlockModal2ContentStyled = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);

  > * {
    padding: 10px;
  }

  > * {
    > * {
      /**
      Некоторым блокам может быть указано 100% ширина.
      Тогда выходит за рамки.
      */
      width: auto !important;

      &:empty {
        margin: 15px;
      }
    }
  }
`

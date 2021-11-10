import styled from 'styled-components'
import { Modal2 } from '../../../../ui/Modal2'

export const AddBlockModal2Styled = styled(Modal2)`
  /* margin-top: 20px; */

  /* left: auto;
  right: auto;
  max-width: 420px; */
  /* z-index: 1200; */
`

export const AddBlockModal2ContentStyled = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  /* width: 480px; */

  /* border: 1px solid red; */
  /* transform-origin: top left;
  width: 200%;
  transform: scale(0.5);  */
  /* 
  */

  /* > * {
    flex-basis: 25%;
    padding: 10px;
  } */

  display: grid;
  /* grid-gap: 10px; */
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);

  > * {
    > * {
      /**
      Некоторым блокам может быть указано 100% ширина.
      Тогда выходит за рамки.
      */
      width: auto !important;
      /* border: 1px solid red !important; */

      &:empty {
        margin: 15px;
      }
    }
  }
`

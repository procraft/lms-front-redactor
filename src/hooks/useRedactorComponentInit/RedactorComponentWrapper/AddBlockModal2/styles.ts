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
  display: flex;
  flex-wrap: wrap;
  width: 480px;

  > * {
    flex-basis: 25%;
    /* padding: 10px; */
  }
`

export const AddBlockModal2BlockStyled = styled.div`
  display: grid;

  > * {
    border: 1px solid green;
    /* height: 20px; */
  }
`

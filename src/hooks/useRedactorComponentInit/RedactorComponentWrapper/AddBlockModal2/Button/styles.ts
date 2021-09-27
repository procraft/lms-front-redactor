import styled from 'styled-components'
import { SectionStyled } from '../../../../../components/Section/styles'

export const AddBlockModal2ButtonStyled = styled.div`
  /* height: 50px; */
  /* border: 1px solid #ddd; */
  /* width: 80px; */

  /* display: grid;

> * {
  border: 1px solid #ddd;
  height: 30px;
} */

  cursor: pointer;

  border: 1px solid transparent;

  &:hover {
    border-color: #ddd;
  }

  ${SectionStyled} {
    &:empty {
      background: #ddd;
      /* border: 1px solid #ccc;
    */
      /* min-height: 20px; */
      /* margin: 2px; */
      padding: 5px;
    }
  }
`

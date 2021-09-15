import styled from 'styled-components'
import {
  Modal2ContentStyled,
  Modal2Styled,
} from '../../../../../ui/Modal2/styles'

// export const TagEditorToolbarStyled = styled(Modal2Styled)`
export const TagEditorToolbarStyled = styled.div`
  /* margin: 5px 0;
  border: 1px solid #ddd;

  
  
  */

  > ${Modal2Styled} {
    > ${Modal2ContentStyled} {
      > .buttons {
        display: flex;
        flex-wrap: wrap;

        .TagEditorToolbar--iconButton {
          height: 34px;
          width: 34px;

          .icon {
            height: 1rem;
            width: 1rem;
            position: absolute;
            &.disabled {
              color: rgba(0, 0, 0, 0.26);
              fill: rgba(0, 0, 0, 0.26);
            }
          }
        }

        i {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
`

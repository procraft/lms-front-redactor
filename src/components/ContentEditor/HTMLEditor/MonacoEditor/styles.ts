import styled from 'styled-components'

export const ContentEditorHTMLEditorMonacoEditorStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 375px;

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0 0;

    & button {
      padding: 8px 0;
      width: 180px;
      border: none;
      border-radius: 4px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;

      &.save {
        background: #16a34a;
        color: #ffffff;
      }

      &.cancel {
        background: #ffffff;
        border: 1px solid #dc2626;
        color: #dc2626;
        margin-right: 16px;
      }

      &.disabled {
        background: #cbd5e1;
        color: #ffffff;
        border: transparent;
      }

      &.iconButton {
        min-width: 220px;
        padding: 8px;
        margin: 0;
        color: #000000;
        text-align: unset;
        text-transform: none;
        & svg {
          width: 32px;
          margin-right: 8px;
        }
      }
    }

    > * {
      margin: 0 10px;
    }

    .error {
      flex: 1;
      color: red;
    }
  }

  > .decorationsOverviewRuler {
    width: 4px;

    & .slider {
      width: 4px;
    }
  }
`

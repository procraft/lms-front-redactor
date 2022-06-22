import styled from 'styled-components'

export const ContentEditorHTMLEditorMonacoEditorStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 375px;

  .buttons {
    display: flex;
    justify-content: flex-end;
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
      }

      &.disabled {
        background: #cbd5e1;
        color: #ffffff;
        border: transparent;
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

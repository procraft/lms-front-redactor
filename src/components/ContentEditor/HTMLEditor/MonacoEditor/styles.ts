import styled from 'styled-components'

export const ContentEditorHTMLEditorMonacoEditorStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;

    > * {
      margin: 0 10px;
    }

    .error {
      flex: 1;
      color: red;
    }
  }
`

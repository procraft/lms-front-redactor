import styled from 'styled-components'

export const LmsFrontRedactorModalHeaderStyled = styled.header`
  display: flex;
  align-items: baseline;

  .title {
    font-size: 20px;
    margin: 0;
    flex: 1;
    display: flex;

    > * {
      margin: 0 3px;
    }
  }

  .buttons {
    margin: 5px;
  }

  margin: 0 0 10px;
`

export const LmsFrontRedactorModalComponentsButtonsStyled = styled.div`
  display: flex;
  > * {
    margin: 5px;
  }
`

export const LmsFrontRedactorModalStyled = styled.div`
  position: fixed;
  overflow: auto;
  border: 2px solid grey;
  /* height: 100%;
  width: 100%; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: ${({ theme }) => theme.frontRedactor.zIndex.modal};
  padding: 10px;
`

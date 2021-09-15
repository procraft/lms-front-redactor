import styled from 'styled-components'

export const Modal2TitleStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 12px;

  > h1 {
    font-size: 18px;
    flex: 1;
    color: #333333;
  }

  > hr {
    margin-top: 0;
    flex-basis: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid #e6e7e8;
    height: 1px;
    width: 100%;
    margin: 12px 0;
  }
`

export const Modal2ContentStyled = styled.div``

export const Modal2Styled = styled.div`
  position: fixed;
  z-index: 900;
  top: 20px;
  left: 150px;
  min-width: 320px;

  display: flex;
  flex-direction: column;
  padding: 8px;
  max-height: calc(100% - 40px);
  box-shadow: 1px 1px 20px 1px rgb(0 0 0 / 15%);
  margin: 0;
  background-color: #fff;
  border-radius: 10px;
  list-style: none;
  user-select: none;
  font-size: 13px;
  /* opacity: 0; */
  animation: fade-in 0.3s linear forwards;

  > ${Modal2TitleStyled} {
  }

  > ${Modal2ContentStyled} {
    padding: 0 10px 10px;
    /* > .buttons {
      display: flex;
      flex-wrap: wrap;
    } */
  }
`

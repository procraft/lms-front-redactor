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

export const Modal2ContentStyled = styled.div`
  padding: 5px;
`

export const ModalContainerStyled = styled.div`
  padding: 8px;
  box-shadow: 1px 1px 20px 1px rgb(0 0 0 / 15%);
  background-color: #fff;
  border-radius: 10px;
  animation: fade-in 0.3s linear forwards;
  font-size: 13px;
`

export const Modal2Styled = styled(ModalContainerStyled)`
  position: fixed;
  z-index: 900;
  top: 20px;
  left: 150px;

  display: flex;
  flex-direction: column;
  max-height: calc(100% - 40px);
  margin: 0;
  list-style: none;
  user-select: none;
  /* opacity: 0; */

  /* > ${Modal2TitleStyled} {
  } */

  /* > ${Modal2ContentStyled} {
  } */
`

import styled, { css } from 'styled-components'

export const Modal2TitleStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 12px;

  > h1 {
    font-size: 18px;
    flex: 1;
    color: #333333;
    margin: 16px;
  }
`

export const Modal2ContentScrollerStyled = styled.div`
  flex: 1;
  padding: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Modal2ContentStyled = styled.div`
  overflow: auto;
  height: 100%;
`

export const ModalContainerStyled = styled.div`
  padding: 16px;
  box-shadow: 0px 4px 16px rgba(148, 163, 184, 0.24);
  border-radius: 4px;
  background-color: #fff;
  animation: fade-in 0.3s linear forwards;
  font-size: 13px;
`

export type Modal2StyledProps = {
  fullScreen?: boolean
}

export const Modal2Styled = styled(ModalContainerStyled)<Modal2StyledProps>`
  position: fixed;
  z-index: 1100;
  top: 20px;
  left: 150px;

  display: flex;
  flex-direction: column;
  max-height: calc(100% - 40px);
  margin: 0 150px 0 0;
  list-style: none;
  user-select: none;
  font-size: 12px;

  * {
    box-sizing: border-box;
  }

  ${({ fullScreen }) => {
    if (fullScreen) {
      return css`
        top: 50px;
        bottom: 50px;
        left: 50px;
        right: 50px;
      `
    }
  }}
`

export const Modal2ModalWrapperStyled = styled.div`
  position: fixed;
  z-index: 1100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 4%);
`

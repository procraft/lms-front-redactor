import { ButtonStyled } from '@procraft/ui/dist/Button/styles'
import styled, { createGlobalStyle } from 'styled-components'
import { useAddBlockButtonProps } from './hooks/useAddBlockButton/interfaces'

export const RedactorComponentWrapperButtonsStyled = styled.div`
  > * {
    margin: 0 2px;
  }

  ${ButtonStyled} {
    min-width: auto;
    min-height: auto;
    width: 28px;
    height: 28px;
    line-height: 26px;
    padding: 0;
    border-radius: 50%;
    background: rgb(37, 36, 36);

    &:active {
      background: rgb(71, 71, 71);
    }

    svg {
      fill: white;
      width: 18px;
      height: 18px;
    }

    &[color='secondary'] {
      svg {
        fill: red;
      }
    }
  }
`

export const RedactorComponentWrapperStyled = styled.div`
  height: 100%;
  white-space: nowrap;

  ${RedactorComponentWrapperButtonsStyled} {
    position: absolute;
    bottom: calc(100% - 14px);
    right: 14px;
  }

  button {
    pointer-events: all;
    cursor: pointer;
  }
`

const TopDirectionSelector: useAddBlockButtonProps['direction'] = 'Top'
const BottomDirectionSelector: useAddBlockButtonProps['direction'] = 'Bottom'
const buttonHeight = 28

export const RedactorComponentWrapperGlobalStyled = createGlobalStyle`
  button.RedactorComponentWrapper--addBlock-button {
    display: block;
    width: ${buttonHeight}px;
    height: ${buttonHeight}px;
    border-radius: 50%;
    border: none;
    background: #2c8ade;
    color: white;
    transition-duration: 0.3s;
    pointer-events: all;
    cursor: pointer;
    font-family: inherit;
    padding: 0;
    font-size: ${buttonHeight}px;
    line-height: ${buttonHeight - 2}px;
    
    position: absolute;
    left: calc(50% - ${buttonHeight / 2}px);

    > svg {
      fill: white;
      padding: 7px;
    }
    
    &:hover {
      transform: scale(1.2);
    }
    
    &.${TopDirectionSelector} {
      top: -${buttonHeight / 2}px;
    }
    
    &.${BottomDirectionSelector} {
      top: auto;
      bottom: -${buttonHeight / 2}px;
    }
  }
`

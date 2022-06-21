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
    width: 24px;
    height: 24px;
    padding: 0;
    border-radius: 50%;
    background: #2563eb;

    &:active {
      background: #1d4ed8;
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
    display: flex;
  }

  button {
    pointer-events: all;
    cursor: pointer;
  }
`

const TopDirectionSelector: useAddBlockButtonProps['direction'] = 'Top'
const BottomDirectionSelector: useAddBlockButtonProps['direction'] = 'Bottom'
const buttonHeight = 24

export const RedactorComponentWrapperGlobalStyled = createGlobalStyle`
  button.RedactorComponentWrapper--addBlock-button {
    display: block;
    width: ${buttonHeight}px;
    height: ${buttonHeight}px;
    border-radius: 50%;
    border: none;
    background: none;
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
      background: rgb(37, 99, 235);
      border-radius: 50%;
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

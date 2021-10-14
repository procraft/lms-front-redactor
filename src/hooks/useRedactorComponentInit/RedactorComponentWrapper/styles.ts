import styled, { createGlobalStyle } from 'styled-components'
import { useAddBlockButtonProps } from './hooks/useAddBlockButton/interfaces'

export const RedactorComponentWrapperStyled = styled.div`
  height: 100%;
  white-space: nowrap;

  .buttons {
    position: absolute;
    bottom: 100%;
    right: 0;

    > * {
      margin: 0 2px;
    }
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

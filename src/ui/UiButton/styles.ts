import styled, { css } from 'styled-components'

export type UiButtonStyledProps = {
  size?: 'small'
  variant?: 'raised'
}

export const UiButtonStyled = styled.button<UiButtonStyledProps>`
  border: 0;
  border-radius: 2px;
  margin: 0;
  padding: 8px 16px;
  display: inline-flex;
  outline: none;
  position: relative;
  user-select: none;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.87);
  min-width: 88px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  text-transform: uppercase;

  line-height: 1.4em;
  font-size: 0.875rem;
  min-height: 36px;

  &:enabled {
    cursor: pointer;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:disabled {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.26);
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 7px 8px;
          min-width: 64px;
          font-size: 0.8125rem;
          min-height: 32px;
        `
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'raised':
        return css`
          box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 20%),
            0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);
          background-color: #e0e0e0;

          &:disabled {
            box-shadow: none;
            background-color: rgba(0, 0, 0, 0.12);
          }
        `
    }
  }}
`

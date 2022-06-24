import styled from 'styled-components'
import { Modal2 } from '../../../../ui/Modal2'
import Button from '@mui/material/Button'

export const EditorStyled = styled.div``

export const CollapsedButtonStyled = styled(Button)`
  position: absolute !important;
  top: 0;
  left: 0;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  width: 80px;
  height: 80px;
  background-color: #3b82f6 !important;
  box-shadow: 0px 4px 16px rgba(59, 130, 246, 0.24) !important;
  border-radius: 8px !important;
  color: #ffffff !important;
  font-family: 'Inter' !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 12px !important;
  line-height: 120% !important;

  &:hover {
    background-color: #2563eb !important;
  }

  & svg {
    margin-bottom: 4px;
  }

  &.hide {
    display: none;
  }
`

export const ContentEditorStyled = styled(Modal2)`
    width: 800px;
    height: 500px;
    left: 20%;
    display: flex;
    flex-direction: column;
  }
`

import React from 'react'
import { SvgIconStyled } from './styles'

export const SvgIcon: React.FC = ({ children, ...other }) => {
  return <SvgIconStyled {...other}>{children}</SvgIconStyled>
}

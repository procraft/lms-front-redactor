import React from 'react'
import { TabsStyled } from './styles'

export type TabsProps = {
  children: JSX.Element[]
  value: string
}

export const Tabs: React.VoidFunctionComponent<TabsProps> = ({ children }) => {
  return <TabsStyled>{children}</TabsStyled>
}

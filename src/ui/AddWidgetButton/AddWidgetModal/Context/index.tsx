import React from 'react'

import { AddWidgetButtonButtonProps } from '../buttons/interfaces'

export type AddWidgetModalContextValue = {
  buttons: React.FC<AddWidgetButtonButtonProps>[]
}

export const AddWidgetModalContext = React.createContext<AddWidgetModalContextValue | null>(null)


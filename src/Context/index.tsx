import React from 'react'
import { LmsFrontRedactorProps } from '../interfaces'

export type LmsFrontRedactorContextValue = {
  inEditMode: boolean
  
  getRedactorObjectComponent: LmsFrontRedactorProps["getRedactorObjectComponent"]
}

const LmsFrontRedactorContext = React.createContext<LmsFrontRedactorContextValue | null>(
  null
)

export default LmsFrontRedactorContext

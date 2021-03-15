import React from 'react'

export type LmsFrontRedactorContextValue = {
  inEditMode: boolean
}

const LmsFrontRedactorContext = React.createContext<LmsFrontRedactorContextValue | null>(
  null
)

export default LmsFrontRedactorContext

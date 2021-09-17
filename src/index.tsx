import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import Context, { LmsFrontRedactorContextValue } from './Context'
import useRedactorComponentInit from './hooks/useRedactorComponentInit'
import useRedactorRenderComponents from './hooks/useRedactorRenderComponents'
// import getRedactorObjectComponent from './hooks/RedactorObjectRender'
import { LmsFrontRedactorProps } from './interfaces'
import { LmsFrontRedactorStyled } from './styles'
import { LmsFrontRedactorGlobalStyle } from './styles/GlobalStyle'

const FrontEditor = dynamic(() => import('./FrontEditor'))

export * from './interfaces'
export * from './RedactorComponent/interfaces'

export { useRedactorComponentInit, useRedactorRenderComponents }

const LmsFrontRedactor: React.FC<LmsFrontRedactorProps> = ({
  object,
  inEditMode,
  updateObject,
  getRedactorObjectComponent,
  objectTemplates,
  linksList,
}) => {
  const context = useMemo<LmsFrontRedactorContextValue>(() => {
    return {
      inEditMode,
      getRedactorObjectComponent,
      objectTemplates,
      linksList,
    }
  }, [getRedactorObjectComponent, inEditMode, linksList, objectTemplates])

  const content = useMemo(() => {
    if (!object) {
      return null
    }

    const Component = getRedactorObjectComponent({
      object,
    })

    if (!Component) {
      return null
    }

    return (
      <Component
        object={object}
        updateObject={updateObject}
        inEditMode={inEditMode}
        wrapperContainer={undefined}
      />
    )
  }, [object, getRedactorObjectComponent, updateObject, inEditMode])

  const redactorContent = useMemo(() => {
    return <Context.Provider value={context}>{content}</Context.Provider>
  }, [content, context])

  return useMemo(() => {
    if (!inEditMode) {
      return redactorContent
    } else {
      return (
        <>
          <LmsFrontRedactorGlobalStyle />
          <LmsFrontRedactorStyled
          // className={inEditMode ? 'inEditMode' : undefined}
          >
            {redactorContent}
          </LmsFrontRedactorStyled>

          <FrontEditor />
        </>
      )
    }
  }, [inEditMode, redactorContent])
}

export default LmsFrontRedactor

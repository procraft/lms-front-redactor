import React, { useMemo } from 'react'
import Context, { LmsFrontRedactorContextValue } from './Context'
import useRedactorComponentInit from './hooks/useRedactorComponentInit'
import useRedactorRenderComponents from './hooks/useRedactorRenderComponents'
// import getRedactorObjectComponent from './hooks/RedactorObjectRender'
import { LmsFrontRedactorProps } from './interfaces'
import { LmsFrontRedactorStyled } from './styles'
import { LmsFrontRedactorGlobalStyle } from './styles/GlobalStyle'

export * from './interfaces'
export * from './RedactorComponent/interfaces'

export { useRedactorComponentInit, useRedactorRenderComponents }

const LmsFrontRedactor: React.FC<LmsFrontRedactorProps> = (props) => {
  const {
    object,
    inEditMode,
    updateObject,
    getRedactorObjectComponent,
    objectTemplates,
  } = props

  const context = useMemo<LmsFrontRedactorContextValue>(() => {
    return {
      inEditMode,
      getRedactorObjectComponent,
      objectTemplates,
    }
  }, [getRedactorObjectComponent, inEditMode, objectTemplates])

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
          {inEditMode ? <LmsFrontRedactorGlobalStyle /> : null}
          <LmsFrontRedactorStyled
          // className={inEditMode ? 'inEditMode' : undefined}
          >
            {redactorContent}
          </LmsFrontRedactorStyled>
        </>
      )
    }
  }, [inEditMode, redactorContent])
}

export default LmsFrontRedactor

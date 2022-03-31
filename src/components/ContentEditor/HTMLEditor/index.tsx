import React, { useState } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { ContentEditorHTMLEditorProps } from './interfaces'
import { ContentEditorHTMLEditorMonacoEditor } from './MonacoEditor'
import { ContentEditorHTMLEditorStyled } from './styles'

/**
 * Компонент для редактирования HTML-кода.
 * Только надо учитывать, что если в коде
 * @deprecated
 */
export const ContentEditorHTMLEditor: React.FC<
  ContentEditorHTMLEditorProps
> = ({ element, object, updateObject, parent, updateParent }) => {
  const [inEditMode, inEditModeSetter] = useState(false)

  const toggleEditMode = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      inEditModeSetter(!inEditMode)
    },
    [inEditMode]
  )

  const button = useMemo(() => {
    return (
      <button onClick={toggleEditMode}>
        {!inEditMode ? 'Редактировать как HTML' : 'Закрыть редактор'}
      </button>
    )

    // toggleEditMode

    // return null
  }, [inEditMode, toggleEditMode])

  return useMemo(() => {
    return (
      <ContentEditorHTMLEditorStyled>
        {button}

        {inEditMode ? (
          <ContentEditorHTMLEditorMonacoEditor
            active
            element={element}
            object={object}
            updateObject={updateObject}
            parent={parent}
            updateParent={updateParent}
          />
        ) : null}
      </ContentEditorHTMLEditorStyled>
    )
  }, [button, inEditMode, element, object, updateObject, parent, updateParent])
}

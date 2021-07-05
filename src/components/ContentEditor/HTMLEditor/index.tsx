import React, { useState } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { ContentEditorHTMLEditorProps } from './interfaces'
import { ContentEditorHTMLEditorMonacoEditor } from './MonacoEditor'
import { ContentEditorHTMLEditorStyled } from './styles'

/**
 * Компонент для редактирования HTML-кода.
 * Только надо учитывать, что если в коде
 */
export const ContentEditorHTMLEditor: React.FC<ContentEditorHTMLEditorProps> =
  ({ element, object, updateObject }) => {
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
            />
          ) : null}
        </ContentEditorHTMLEditorStyled>
      )
    }, [button, inEditMode, element, object, updateObject])
  }
